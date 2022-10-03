import React, { useContext } from "react";

import { Container, Flex, Heading } from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";

import { GoBackHomeButton } from "../atoms/buttons/GoBackHomeButton";
import { TodoContext } from "../../contexts/TodoContext";

export const Stats = () => {
  const { sumUpStoryPoints } = useContext(TodoContext);

  return (
    <Container maxW="container.xl" pt={10}>
      <Heading mx={4} my={6}>
        Your Stats
      </Heading>
      <Flex
        textAlign="center"
        alignItems="center"
        height={200}
        mb={10}
        mx={5}
        border="1px"
        borderColor="gray.300"
        borderRadius={9}
        backgroundColor="whiteAlpha.700"
      >
        <Stat>
          <StatLabel>Open Status</StatLabel>
          <StatNumber>{sumUpStoryPoints("open")}</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>In Progress Status</StatLabel>
          <StatNumber>{sumUpStoryPoints("in progress")}</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Done Status</StatLabel>
          <StatNumber>{sumUpStoryPoints("done")}</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
      </Flex>
      <Flex justify="center">
        <GoBackHomeButton />
      </Flex>
    </Container>
  );
};
