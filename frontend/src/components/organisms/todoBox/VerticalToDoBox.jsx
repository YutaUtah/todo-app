import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../../contexts/TodoContext";
import { ToDoCard } from "../../molecules/ToDoCard";

import { changeStatusById, deleteById } from "../../../services/todos.service";

export const VerticalToDoBox = (props) => {
  const { cards, status } = props;
  const { allEvents, setAllEvents,setDisplayedEvents } = useContext(TodoContext);

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
            deleteById={() =>
              deleteById(eachEvent, setAllEvents, allEvents)
            }
            changeStatusById={(allEvents, setAllEvents, status, title) =>
              changeStatusById(allEvents, setAllEvents, status, title)
            }
          />
        </Box>
      ))}
    </Flex>
  );
};
