import React, { memo } from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import { ToDoCard } from "../../molecules/ToDoCard";

import { deleteById, changeStatusById } from "../../../services/todos.service";

export const HorizontalToDoBox = memo((props) => {
  const { allEvents, setAllEvents } = props;

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" mt={6} mb={5}>
        {allEvents.map((event) => (
          <GridItem w="100%" key={event.title}>
            <ToDoCard
              key={event.title}
              title={event.title}
              start={event.start}
              end={event.end}
              details={event.details}
              status={event.status}
              storyPoints={event.storyPoints}
              deleteById={() => deleteById(event, setAllEvents, allEvents)}
              changeStatusById={(allEvents, setAllEvents, status, title) =>
                changeStatusById(allEvents, setAllEvents, status, title)
              }
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
});
