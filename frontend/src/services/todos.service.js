import axios from "axios";
import { newEvent } from "../examples/eventSchema";

export const getAll = async () => {
  try {
    const res = await axios.get("/api/todos/")
    console.log(res, 'inside todo service')
    return res;
    // return console.log(res.data, "getall");
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

