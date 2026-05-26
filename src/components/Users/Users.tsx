import axios from "axios";
import css from "./Users.module.css";
import { useEffect, useState } from "react";

const Users = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //       setUsers([...users, ...res.data]);
  //     });
  //   }, []);

  //   useEffect(() => {
  //     console.log("З днем народження");
  //   }, [counter]);

  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //       setUsers(res.data);
  //     });
  //   }, [counter]);

  return (
    <div className={css["users"]}>
      {/* <button onClick={() => setCounter(counter + 1)}>
        Counter({counter}) ++
      </button>

      {users.map((el) => {
        return <p>{el.name}</p>;
      })} */}
    </div>
  );
};

export default Users;
