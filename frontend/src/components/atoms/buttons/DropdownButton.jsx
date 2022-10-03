import React from "react";

import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export const DropdownButton = (props) => {
  const { IoEllipsisHorizontalSharp, changeStatus, title } = props;
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
          <MenuItem onClick={() => changeStatus("open", title)}>
            Move to Open
          </MenuItem>
          <MenuItem onClick={() => changeStatus("inprogress", title)}>
            Move to In Progress
          </MenuItem>
          <MenuItem onClick={() => changeStatus("done", title)}>
            Move to Done
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
