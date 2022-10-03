import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Flex, Heading } from "@chakra-ui/react";

import { UserAuth } from "../../providers/Auth";

export const HeaderLayout = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user === null) {
      navigate("/signin");
    }
  }, [user, navigate]);

  return (
    <>
      <Flex
        as="nav"
        bg="blue.500"
        color="gray.50"
        padding={{ base: 3, md: 5 }}
        justifyContent="space-between"
      >
        <Link to="/">
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }} mx={8}>
            To Do App
          </Heading>
        </Link>
        <Flex>
          <Box mx={2}>
            <Link to="/board">Board</Link>
          </Box>
          <Box mx={2}>
            <Link to="/tasks">Tasks</Link>
          </Box>
          <Box mx={2}>
            <Link to="/stats">Stats</Link>
          </Box>
          <Box mx={2}>
            {user?.displayName ? (
              <Link onClick={handleSignOut}>Log out</Link>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
