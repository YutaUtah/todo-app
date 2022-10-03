import React, { useEffect, useContext } from "react";
import { Calendar } from "react-big-calendar";

import { Container, Flex, Heading, VStack } from "@chakra-ui/react";

import { EventBox } from "../organisms/EventBox";
import { UserAuth } from "../../providers/Auth";
import { TodoContext } from "../../contexts/TodoContext";
import { validateNewEvent } from "../../utils/validator/errorValidator";
import { submitFromEvent } from "../../services/todos.service";

export const Home = () => {
    const { user } = UserAuth();

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
      setAllEvents([...allEvents, newEvent]);
      submitFromEvent(newEvent);
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
        Welcome,
        {/* {user?.displayName}! */}
      </Heading>
      <Flex align="center">
        <VStack bg="white" borderRadius="20px" shadow="md" m={2}>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          />
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
