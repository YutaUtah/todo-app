import React, { useContext } from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

import { PrimaryTag } from "../atoms/tags/PrimaryTag";
import { DropdownButton } from "../atoms/buttons/DropdownButton";
import { TodoContext } from "../../contexts/TodoContext";

export const ToDoCard = (props) => {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");

  const { getTagColor, formatDate, allEvents, setAllEvents } =
    useContext(TodoContext);

  const {
    title,
    start,
    end,
    details,
    status,
    storyPoints,
    deleteById,
    changeStatusById,
  } = props;

  return (
    <Flex
      borderRadius="20px"
      shadow="lg"
      bg={boxBg}
      h="345px"
      w={{ base: "300px", md: "300px" }}
      m={2}
      direction="column"
    >
      <Box p="20px">
        <DropdownButton
          changeStatusById={changeStatusById}
          IoEllipsisHorizontalSharp={IoEllipsisHorizontalSharp}
          title={title}
        />
        <Box>
          <Text
            fontWeight="600"
            color={mainText}
            w="100%"
            fontSize="2xl"
            mb={1}
          >
            {title}
          </Text>
          <PrimaryTag color={getTagColor(status)} status={status} />
        </Box>
        <Box>
          <Text fontWeight="200" color={mainText}>
            {formatDate(start)} - {formatDate(end)}
          </Text>
          <Text fontWeight="200" color={mainText}>
            Estimated: {storyPoints} Hours
          </Text>
        </Box>
      </Box>
      <Flex w="100%" p="20px" height="100%" direction="column">
        <Text
          fontSize="sm"
          color="gray.500"
          pe="40px"
          fontWeight="500"
          mb="auto"
        >
          {details}
        </Text>
        <Flex gap="5">
          <CheckIcon
            onClick={() =>
              changeStatusById(allEvents, setAllEvents, "done", title)
            }
          />
          <DeleteIcon onClick={deleteById} />
        </Flex>
      </Flex>
    </Flex>
  );
};
