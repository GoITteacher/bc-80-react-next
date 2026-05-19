const formElem = document.querySelector(".js-form") as HTMLFormElement;
// const btnElem = document.querySelector("") as HTMLButtonElement;
// const ulElem = document.querySelector("") as HTMLUListElement;

// formElem.addEventListener("submit", handleFormSubmit);
// function handleFormSubmit(e: SubmitEvent) {
//   e.preventDefault();
//   const borys = new FormData(e.target as HTMLFormElement);

//   const data = {
//     title: borys.get("title") as string,
//     description: borys.get("description") as string,
//     category: borys.get("category") as string,
//     price: Number(borys.get("price")),
//   };
// }

//!=========================================

// btnElem.addEventListener("click", handleBtnClick);
// function handleBtnClick(e: PointerEvent) {}

//!=========================================

const elem = document.querySelector(".js-for-click") as
  | HTMLButtonElement
  | HTMLDivElement;
//!=========================================

function showElem(elem: HTMLButtonElement | HTMLDivElement) {
  elem.addEventListener("click", (e) => {
    console.log("click");
  });
}
