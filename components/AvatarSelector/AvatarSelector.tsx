"use client";
import { ChangeEvent, useEffect, useState } from "react";
import css from "./AvatarSelector.module.css";
import { updateAvatar } from "@/services/user";

const AvatarSelector = () => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");

  const handleChangeFile = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    const files = e.target.files || [];

    if (files.length === 0) {
      return;
    }
    const file = files[0];

    if (!file.type.startsWith("image/")) {
      return;
    }

    if (file.size > 1024 * 1024 * 10) {
      return;
    }

    setFile(file);

    if (url) {
      URL.revokeObjectURL(url);
    }

    const newUrl = URL.createObjectURL(file);
    setUrl(newUrl);
  };

  // const handleChangeFile = (
  //   e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  // ) => {
  //   const files = e.target.files || [];

  //   if (files.length === 0) {
  //     return;
  //   }
  //   const file = files[0];

  //   const fileReader = new FileReader();

  //   fileReader.onloadend = () => {
  //     console.log(fileReader.result);
  //   };

  //   fileReader.readAsDataURL(file);
  // };

  useEffect(() => {
    return () => {
      console.log("Test");
      if (url) {
        console.log("Test2");
        URL.revokeObjectURL(url);
      }
    };
  }, [url]);

  // const handleSubmit = () => {
  //   const formData = new FormData();
  //   if (file) {
  //     formData.set("avatar", file);
  //   }
  // };

  const handleSubmit = (formData: FormData) => {
    updateAvatar(formData);
  };
  return (
    <div className={css["avatarSelector"]}>
      <form action={handleSubmit}>
        <input type="text" />
        <input type="file" onChange={handleChangeFile} />
      </form>

      {url && <img src={url} alt="" width="100" />}
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
};

export default AvatarSelector;
