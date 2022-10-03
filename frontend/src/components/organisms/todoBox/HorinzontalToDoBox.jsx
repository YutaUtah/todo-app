import React, { memo } from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import { ToDoCard } from "../../molecules/ToDoCard";
import axios from "axios";

export const HorizontalToDoBox = memo((props) => {
  const { allEvents, setAllEvents } = props;

  const deleteToDoCard = (event) => {
    const modifiedAllEvents = allEvents.filter(
      (eachEvent) => eachEvent.title !== event.title
    );
    axios.delete(`/api/todos/${event.id}`).then(() => {
        setAllEvents(modifiedAllEvents)
    })
  };

  const changeStatus = (status, title) => {
    // Deepcopied with the spread syntax
    const modifiedStatusEvents = [...allEvents];
    modifiedStatusEvents.map((eachEvent) => {
      if (eachEvent.title === title) {
        eachEvent.status = status;
        axios.put(`/api/todos/${eachEvent.id}/`, eachEvent).then(() => {
            setAllEvents(modifiedStatusEvents)
        })
      }
    });
  };

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
              deleteToDoCard={() => deleteToDoCard(event)}
              changeStatus={(status, title) => changeStatus(status, title)}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
});
