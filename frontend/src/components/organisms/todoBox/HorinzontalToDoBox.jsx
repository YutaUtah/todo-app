import React, { memo } from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import { ToDoCard } from "../../molecules/ToDoCard";

export const HorizontalToDoBox = memo((props) => {
  const { displayedEvents, setDisplayedEvents, setAllEvents } = props;

  const deleteToDoCard = (event) => {
    const modifiedAfterDeletedEvents = displayedEvents.filter(
      (eachEvent) => eachEvent.title !== event.title
    );
    setDisplayedEvents(modifiedAfterDeletedEvents);
    setAllEvents(modifiedAfterDeletedEvents);
  };

  const changeStatus = (status, title) => {
    // Deepcopied with the spread syntax
    const modifiedStatusEvents = [...displayedEvents];
    modifiedStatusEvents.map((eachEvent) => {
      if (eachEvent.title === title) {
        eachEvent.status = status;
      }
    });
    setDisplayedEvents(modifiedStatusEvents);
  };

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" mt={6} mb={5}>
        {displayedEvents.map((event) => (
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
