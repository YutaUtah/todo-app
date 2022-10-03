import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoContext";
import { ToDoCard } from "../../molecules/ToDoCard";

import axios from "axios";

export const VerticalToDoBox = (props) => {
  const { cards, status } = props;
  const { allEvents, setAllEvents, setDisplayedEvents } =
    useContext(TodoContext);

  const deleteToDoCard = (event) => {
    const modifiedAfterDeletedEvents = allEvents.filter(
      (eachEvent) => eachEvent.title !== event.title
    );
    setAllEvents(modifiedAfterDeletedEvents);
    setDisplayedEvents(modifiedAfterDeletedEvents);
  };

  const changeStatus = (status, title) => {
    // Deepcopied with the spread syntax
    const modifiedStatusEvents = [...allEvents];
    modifiedStatusEvents.map((eachEvent) => {
      if (eachEvent.title === title) {
        eachEvent.status = status;
        axios.put(`/api/todos/${eachEvent.id}/`, eachEvent).then(()=>{
            setAllEvents(modifiedStatusEvents)
        })
      }
    });
  };

  return (
    <Flex
      flexDirection="column"
      p={10}
      border="1px"
      borderColor="gray.300"
      backgroundColor="whiteAlpha.800"
      minW="400px"
      minH="450px"
    >
      <Heading size="md" px={7} mb={3}>
        {status}
      </Heading>
      {cards.map((eachEvent) => (
        <Box mx={5} my={2}>
          <ToDoCard
            key={eachEvent.title}
            title={eachEvent.title}
            start={eachEvent.start}
            end={eachEvent.end}
            details={eachEvent.details}
            status={eachEvent.status}
            storyPoints={eachEvent.storyPoints}
            deleteToDoCard={() => deleteToDoCard(eachEvent)}
            changeStatus={(status, title) => changeStatus(status, title)}
          />
        </Box>
      ))}
    </Flex>
  );
};
