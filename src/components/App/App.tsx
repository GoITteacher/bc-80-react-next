import Cars from "../Cars/Cars";
import Tasks from "../Tasks/Tasks";
import UserInput from "../UserInput/UserInput";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <UserInput />
      <hr />
      <Cars />
      <hr />
      <Tasks />
    </div>
  );
}
