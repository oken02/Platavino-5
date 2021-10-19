import axios from "axios";
import { useRef, useState } from "react";

export const useSearch = (path) => {
  const [data, setData] = useState(null);
  const queryref = useRef("");

  const handleChange = ({ target: { value } }) => {
    queryref.current = value;
    if (value.length < 1) {
      setData(null);
      return;
    }

    // http://localhost:3001/api/users/
    // axios.get(path);

    axios.get(`${path}${value}`).then((res) => {
      if (value === queryref.current) {
        setData(res.data);
        console.log("SETTED!!!");
      }
    });
    console.log("PIDIENDO");
    // setData([]);
    console.log("CHANGE");
  };

  return [data, handleChange];
};
