/**
 * Типізація функцій: параметри, тип результату, void, опціональні параметри та значення за замовчуванням.
 *
 * План блоку:
 * 1) Сигнатури функцій: параметри та повернення.
 * 2) void і never — коли застосовувати.
 * 3) Опціональні параметри та дефолти в сигнатурі.
 * 4) Стрілкові функції vs декларації: як описувати типи.
 *
 */
//!======================================================
// сигнатури: задаємо типи параметрів і повернення; TS виводить їх з тіла, але явна анотація робить контракт явним.

// function createUser(name: string, age: number) {}
// createUser("Vasya", 25);
// createUser("Vasya", 25, true);
// createUser("Vasya");
// createUser("vasya",);

// const arrowFn = (x: number, y: number) => {
//   return x + y;
// };

// function foo(y: object, x: number, q: boolean):number{}
//!======================================================
// void/never: void для "нічого не повертає", never для "не завершується" (кидає помилку або нескінченний цикл).

// function onClick(x1: number, x2: number): void {
//   console.log(x1, x2);
// }

// function catchError(error: string): never {
//   console.log("Error", error);
//   throw new Error(error);
// }

//!======================================================
// optional/дефолти: параметр? або значення за замовчуванням у сигнатурі; перевіряти на undefined усередині.

// function showUserInfo(name?: string, age?: number) {}

// function showInfo(name: string = "Anonym") {
//   console.log(name);
// }
// showInfo();

//!=========================================

// function foo(age: number | string) {
//   if (typeof age === "string") {
//     age.toUpperCase();
//   }else{
//     age.toFixed()
//   }
// }

//!=========================================

function foo(x: number, y?: number) {
  if (y) {
    console.log(x * y);
  }
}

//!======================================================
/* 🧩 Task 1 — типізація аргументів
 * Додай точні типи замість any/unknown.
 */
// export function add(a, b) {
//   return a + b;
// }

/* 🧩 Task 2 — void функція
 * Опиши логер так, щоб він нічого не повертав і приймав рядок.
 */
// export const logMessage = (message) => {
//   console.log("[LOG]", message);
// };

/* 🧩 Task 3 — optional параметр
 * Типізуй title як опціональний, а role — літерально.
 */
// type UserRole = any;
// export function createUser(name, role, title) {
//   return { name, role, title: title ?? "Mr/Ms" };
// }

/* 🧩 Task 4 — never
 * Додай тип never для функції, що завжди кидає помилку.
 */
// export function fail(message) {
//   throw new Error(message);
// }

//!=========================================

// type MyCallback = (x: number, y: number) => void;

// function foo(x1: number, y1: number, callback: MyCallback) {
//   callback(x1, y1);
// }

// foo(10, 20, (x, y) => console.log(x + y));

//!=========================================
