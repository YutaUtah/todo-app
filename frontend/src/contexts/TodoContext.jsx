import React, { createContext, useState } from "react";

import { dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

export const TodoContext = createContext({});

export const TodoContextProvider = ({ children }) => {
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    storyPoints: "",
    details: "",
    status: "open",
  });

  const [allEvents, setAllEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [toDoDetail, setToDoDetail] = useState("");
  const [filterState, setFilterState] = useState("");

  const filterByStatus = (status) => {
    const filteredEvents = allEvents.filter(
      (eachEvent) => eachEvent.status === status
    );
    setDisplayedEvents(filteredEvents);
    setFilterState(status);
  };

  const resetCards = () => {
    setDisplayedEvents(allEvents);
    setFilterState("");
  };

  const groupByStatusDashBoard = (status) => {
    return allEvents.filter((eachEvent) => eachEvent.status === status);
  };

  const sumUpStoryPoints = (status) => {
    return groupByStatusDashBoard(status).reduce(
      (total, currentValue) => (total = total + currentValue.storyPoints),
      0
    );
  };

  const value = {
    locales,
    localizer,
    newEvent,
    setNewEvent,
    allEvents,
    setAllEvents,
    toDoDetail,
    setToDoDetail,
    filterByStatus,
    displayedEvents,
    setDisplayedEvents,
    resetCards,
    filterState,
    groupByStatusDashBoard,
    sumUpStoryPoints,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
