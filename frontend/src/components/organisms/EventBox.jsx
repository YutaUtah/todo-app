import React, { memo } from "react";

import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Flex,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export const EventBox = memo((props) => {
  const { handleAddEvent, newEvent, setNewEvent, value, handleInputChange } =
    props;

  return (
    <Flex align="center" justify="center">
      <Box
        w="sm"
        p={4}
        borderRadius="20px"
        shadow="md"
        bg="white"
        minHeight="600"
      >
        <Heading as="h3" size="1xl" textAlign="center" m={2}>
          Add New Event
        </Heading>
        <Stack spacing={6} py={4} px={10}>
          <Input
            type="text"
            placeholder="Add Title"
            size="sm"
            value={newEvent.title}
            isRequired={true}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.currentTarget.value })
            }
          />
          <Input
            type="date"
            placeholder="start date"
            size="sm"
            selected={newEvent.start}
            isRequired={true}
            onChange={(e) =>
              setNewEvent({
                ...newEvent,
                start: e.currentTarget.value,
              })
            }
          />
          <Input
            type="date"
            placeholder="end date"
            size="sm"
            selected={newEvent.end}
            isRequired={true}
            onChange={(e) =>
              setNewEvent({ ...newEvent, end: e.currentTarget.value })
            }
          />
          <NumberInput
            min={0}
            max={20}
            value={newEvent.storyPoints}
            size="sm"
            onChange={(e) =>
              setNewEvent({ ...newEvent, storyPoints: parseInt(e) })
            }
          >
            <NumberInputField placeholder="Estimated Hours" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Textarea
            value={value}
            minH="200px"
            placeholder="more details?"
            isRequired={true}
            onChange={handleInputChange}
          />
          <Button onClick={handleAddEvent}>Add Event</Button>
        </Stack>
      </Box>
    </Flex>
  );
});
