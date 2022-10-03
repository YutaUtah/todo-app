import { Tag, Text } from "@chakra-ui/react";
import React from "react";

export const PrimaryTag = (props) => {
  const { status, color } = props;
  return (
    <Tag size="sm" variant="solid" colorScheme={color}>
      <Text fontWeight="400" color="white" w="100%" fontSize="1xl">
        {status}
      </Text>
    </Tag>
  );
};
