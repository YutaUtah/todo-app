import React, { useContext } from "react";

import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { TodoContext } from "../../../contexts/TodoContext";

export const DropdownButton = (props) => {
  const { IoEllipsisHorizontalSharp, changeStatusById, title } = props;
  const { allEvents, setAllEvents } = useContext(TodoContext);

  return (
    <Flex w="100%" mb="10px" justifyContent="end">
      <Menu>
        <MenuButton
          w="38px"
          h="38px"
          align="center"
          justify="center"
          borderRadius="12px"
          shadow="md"
          me="12px"
          _hover={{ bg: "gray.400" }}
        >
          <Icon w="24px" h="24px" as={IoEllipsisHorizontalSharp} />
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() =>
              changeStatusById(allEvents, setAllEvents, "open", title)
            }
          >
            Move to Open
          </MenuItem>
          <MenuItem
            onClick={() =>
              changeStatusById(allEvents, setAllEvents, "inprogress", title)
            }
          >
            Move to In Progress
          </MenuItem>
          <MenuItem
            onClick={() =>
              changeStatusById(allEvents, setAllEvents, "done", title)
            }
          >
            Move to Done
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
