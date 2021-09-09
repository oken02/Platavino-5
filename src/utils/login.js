import axios from "axios";

export const login = () => {
  return new Promise((res, rej) => {
    const lstoken = localStorage.getItem("token");
    if (!lstoken) {
      rej();
      return;
    }

    axios
      .post(
        "http://localhost:3001/api/auth/validate",
        {},
        {
          headers: {
            Authorization: "Bearer " + lstoken,
          },
        }
      )
      .then(res)
      .catch(rej);
  });
};
