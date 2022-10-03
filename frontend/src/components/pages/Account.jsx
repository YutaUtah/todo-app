import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Flex, Heading } from "@chakra-ui/react";

import { UserAuth } from "../../providers/Auth";

export const Account = () => {
  const { user } = UserAuth();

  return (
    <div>
      <Container>
        <Flex m={5} direction="column" align="center">
          <Heading>Welcome, {user?.displayName}!</Heading>
          <Flex m={10}>
            <Button mx={3} colorScheme="blue">
              <Link to="/">Go to Top Page?</Link>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};
