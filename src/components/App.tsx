import { useState } from "react";
import ArrayExample from "./ArrayExample/ArrayExample";
import CounterExample from "./CounterExample/CounterExample";
import Fruits from "./Fruits/Fruits";
import Listener from "./Listener/Listener";
import Modal from "./Modal/Modal";
import ObjectExample from "./ObjectExample/ObjectExample";
import ModalExample from "./ModalExample/ModalExample";

export default function App() {
  return (
    <div>
      {/* <Listener /> */}
      {/* <CounterExample />
      <CounterExample />
      <CounterExample /> */}
      {/* <Fruits /> */}
      {/* <ArrayExample /> */}
      {/* <ObjectExample /> */}
      <ModalExample />
    </div>
  );
}

//!=========================================

// function foo() {
//   let x = 10;
//   let y = 10;
//   let t = 10;

//   if (true) {
//     console.log(x);
//   }

//   if (true) {
//     console.log(y);
//   }

//   if (true) {
//     console.log(t);
//   }

//   if (true) {
//     console.log(x);
//     console.log(y);
//     console.log(t);
//   }
// }
