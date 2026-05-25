import { useState } from "react";
import { getUsers } from "../../services/userService";
import css from "./UserList.module.css";
import { User } from "../../types/users";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = async (formData: FormData) => {
    const query = formData.get("username") as string;
    const res = await getUsers(query);
    setUsers(res);
  };

  return (
    <div className={css["userList"]}>
      <form action={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {users.map((el) => {
          return <li key={el.id}>{el.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
