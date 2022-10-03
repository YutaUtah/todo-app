import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../providers/Auth";
import { Container, Flex, Heading } from "@chakra-ui/react";

import { GoogleButton } from "react-google-button";

export const SignIn = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGooglesignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user, navigate]);
  return (
    <Container justify="center">
      <Flex direction="column" align="center">
        <Link text="center" to="/signin">
          <Heading m={5}>Sign in</Heading>
        </Link>
        <GoogleButton onClick={handleGooglesignIn} />
      </Flex>
    </Container>
  );
};
