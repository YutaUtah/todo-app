import React, { useContext, useEffect } from "react";

import { Container, Flex, Heading } from "@chakra-ui/react";

import { TodoContext } from "../../contexts/TodoContext";
import { VerticalToDoBox } from "../organisms/todoBox/VerticalToDoBox";
import { GoBackHomeButton } from "../atoms/buttons/GoBackHomeButton";
import { useTodos } from "../../hooks/useTodo";

export const Board = () => {
  const { groupByStatusDashBoard, allEvents, setAllEvents } = useContext(TodoContext);
  const todos = useTodos();

  useEffect(() => {
    setAllEvents(todos)
  }, [allEvents]);

  return (
    <Container maxW="container.xl" pt={10}>
      <Flex justifyContent="space-between">
        <Heading mx={4} my={6}>
          Your Board
        </Heading>
      </Flex>
      <Flex>
        <Flex
          justify="space-around"
          backgroundColor="whiteAlpha.200"
          mb={10}
          p={2}
        >
          <VerticalToDoBox
            cards={groupByStatusDashBoard("open")}
            status="open"
          />
          <VerticalToDoBox
            cards={groupByStatusDashBoard("in progress")}
            status="inprogress"
          />
          <VerticalToDoBox
            cards={groupByStatusDashBoard("done")}
            status="done"
          />
        </Flex>
      </Flex>
      <Flex justify="center">
        <GoBackHomeButton />
      </Flex>
    </Container>
  );
};
