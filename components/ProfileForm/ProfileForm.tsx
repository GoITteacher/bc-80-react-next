"use client";

import { useState } from "react";
import css from "./ProfileForm.module.css";

const ProfileForm = () => {
  const [page, setPage] = useState();

  const handleClick = () => {
    console.log("test");
  };

  return (
    <div className={css["profileForm"]}>
      <button onClick={handleClick}>Test</button>
    </div>
  );
};

export default ProfileForm;
