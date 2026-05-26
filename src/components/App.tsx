import { useState, useEffect } from "react";
import Timer from "./Timer";
import Sidebar from "./Sidebar";

import Cars from "./Cars/Cars";
import Users from "./Users/Users";
import Fruits from "./Fruits/Fruits";
import Greeting from "./Greeting/Greeting";
import Cars2 from "./Cars2/Cars2";

export default function App() {
  // const [isOpen, setIsOpen] = useState(false);

  // const open = () => {
  //   setIsOpen(true);
  // };

  // const close = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      <Cars2 />
      {/* <Greeting /> */}
      {/* <Fruits /> */}
      {/* <Cars /> */}
      {/* <Users /> */}

      {/* <button onClick={open}>Open</button>
      {isOpen && <Sidebar onClose={close} />} */}

      {/* <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <Timer />} */}
    </>
  );
}
