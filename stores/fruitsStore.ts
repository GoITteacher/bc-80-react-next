import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FruitsStore {
  apples: number;
  lemons: number;
  oranges: number;

  setApples: (newValue: number) => void;
  setLemons: (newValue: number) => void;
  setOranges: (newValue: number) => void;

  clearStore: () => void;
  incrementFruits: () => void;
}

export const useFruitsStore = create<FruitsStore>()(
  persist(
    (setStore) => {
      return {
        apples: 5,
        lemons: 10,
        oranges: 15,

        setApples(value) {
          setStore(() => {
            return { apples: value };
          });
        },

        setLemons(value) {
          setStore(() => {
            return { lemons: value };
          });
        },

        setOranges(value) {
          setStore(() => {
            return { oranges: value };
          });
        },

        clearStore() {
          setStore(() => {
            return {
              apples: 0,
              lemons: 0,
              oranges: 0,
            };
          });
        },

        incrementFruits() {
          setStore((store) => {
            return {
              apples: store.apples + 1,
              lemons: store.lemons + 1,
              oranges: store.oranges + 1,
            };
          });
        },
      };
    },
    {
      name: "fruits-data",
      partialize: (store) => {
        return { apples: store.apples };
      },
    }
  )
);

//!=========================================

// const [x,setX] = useState(10);
// setStore({ x: 10, y: 20 });

// setStore((prevX)=>{
//     if(prevX<10){
//         return prevX + 1
//     }
// })

// setApples(10);

//!=========================================

// const useFruitsStore = create()((setStore) => {
//   return {
//     firstname: "",
//     lastname: "",
//     age: "",

//     setInfo() {},
//     setFullName() {},
//     incrementAge() {},
//   };
// });
