import React, { useEffect, useContext } from "react";
import { Calendar } from "react-big-calendar";

import { Container, Flex, Heading, VStack } from "@chakra-ui/react";

import { EventBox } from "../organisms/EventBox";
import { UserAuth } from "../../providers/Auth";
import { TodoContext } from "../../contexts/TodoContext";
import { validateNewEvent } from "../../utils/validator/errorValidator";
import { getAllAndSetState, submitFromEvent } from "../../services/todos.service";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const { user } = UserAuth();
    const navigate = useNavigate();

  const {
    localizer,
    newEvent,
    setNewEvent,
    allEvents,
    setAllEvents,
    toDoDetail,
    setToDoDetail,
  } = useContext(TodoContext);

  const handleAddEvent = () => {
    const result = validateNewEvent(newEvent, allEvents);
    if (result === "succeeded") {
      setNewEvent({ ...newEvent, status: "open" });
      submitFromEvent(newEvent);
      getAllAndSetState(setAllEvents);
      navigate("/tasks")
    }
  };

  const handleInputChange = (e) => {
    setToDoDetail(e.target.value);
    setNewEvent({ ...newEvent, details: toDoDetail });
  };

  useEffect(() => {
    setNewEvent({ ...newEvent, details: toDoDetail });
  }, [toDoDetail]);

  return (
    <Container maxW="container.xl" pt={10}>
      <Heading mx={4} my={6}>
        Welcome, {user?.displayName}!
      </Heading>
      <Flex align="center">
        <VStack bg="white" borderRadius="20px" shadow="md" m={2}>
          {/* <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          /> */}
        </VStack>
        <VStack m={2}>
          <EventBox
            newEvent={newEvent}
            value={toDoDetail}
            setNewEvent={setNewEvent}
            handleAddEvent={handleAddEvent}
            handleInputChange={handleInputChange}
          />
        </VStack>
      </Flex>
    </Container>
  );
};
