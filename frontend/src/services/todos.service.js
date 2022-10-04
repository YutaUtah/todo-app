import axios from "axios";

export const getAllAndSetState = (setAllEvents) => {
  axios.get("/api/todos/").then((res) => {
    setAllEvents(res.data);
  });
};

export const deleteById = (event, setAllEvents, allEvents) => {
  const modifiedAllEvents = allEvents.filter(
    (eachEvent) => eachEvent.title !== event.title
  );

  axios.delete(`/api/todos/${event.id}`).then(() => {
    setAllEvents(modifiedAllEvents);
  });
};

export const changeStatusById = (allEvents, setAllEvents, status, title) => {
  const modifiedStatusEvents = [...allEvents];
  modifiedStatusEvents.map((eachEvent) => {
    if (eachEvent.title === title) {
      eachEvent.status = status;
      axios.put(`/api/todos/${eachEvent.id}/`, eachEvent).then(() => {
        setAllEvents(modifiedStatusEvents);
      });
    }
  });
};

export const getAll = async () => {
  try {
    const res = await axios.get("/api/todos/");
    return res;
  } catch (err) {
    return console.log(err);
  }
};

export const submitFromEvent = async (event) => {
  try {
    // this expects dictionary
    // path is quite important
    axios.post("/api/todos/", event).then((res) => getAll());
  } catch (err) {
    return console.log(err.response.data);
  }
};
