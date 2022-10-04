import axios from "axios";
import { useEffect, useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodoRequest = async () => {
      const response = await axios.get("/api/todos/");
      return response.data;
    };
    getTodoRequest().then((todos) => {
      setTodos(todos);
    });
  }, []);
  return todos;
};
