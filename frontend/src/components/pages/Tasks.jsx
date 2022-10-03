import React, { useContext, useEffect } from "react";

import {
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { TodoContext } from "../../contexts/TodoContext";
import { HorizontalToDoBox } from "../organisms/todoBox/HorinzontalToDoBox";
import { GoBackHomeButton } from "../atoms/buttons/GoBackHomeButton";
import { getAllAndSetState } from "../../services/todos.service";

export const Tasks = () => {
  const { allEvents, setAllEvents, filterByStatus, resetCards, filterState } =
    useContext(TodoContext);

  useEffect(() => {
    getAllAndSetState(setAllEvents);
  }, []);

  return (
    <Container maxW="container.xl" pt={10}>
      <Flex justifyContent="space-between">
        <Heading mx={4} my={6}>
          Your Tasks
        </Heading>
        <Menu>
          <MenuButton
            px={4}
            m={3}
            borderRadius="12px"
            shadow="md"
            backgroundColor="white"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
          >
            Filter By <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => filterByStatus("open")}>Open</MenuItem>
            <MenuItem onClick={() => filterByStatus("in progress")}>
              In Progress
            </MenuItem>
            <MenuItem onClick={() => filterByStatus("done")}>Done</MenuItem>
            <MenuItem onClick={() => resetCards()}>Reset</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {filterState !== "" && (
        <Heading size="md" color="gray.500" fontWeight="normal" mx={5} my={2}>
          Current Filter: {filterState}
        </Heading>
      )}
      <HorizontalToDoBox setAllEvents={setAllEvents} allEvents={allEvents} />
      <Flex justify="center">
        <GoBackHomeButton />
      </Flex>
    </Container>
  );
};
