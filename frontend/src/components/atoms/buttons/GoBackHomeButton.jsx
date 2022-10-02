import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@chakra-ui/react";

export const GoBackHomeButton = () => {
  return (
    <Button as="a" colorScheme="blue" href="/">
      <Link to="/">Create Tasks?</Link>
    </Button>
  );
};
