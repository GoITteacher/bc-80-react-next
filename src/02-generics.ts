/**
 * Узагальнені типи (generics)
 *
 * План:
 * - Навіщо generics: повторне використання з різними типами.
 * - Параметри типів <T>, кілька параметрів <T, U>.
 * - Інференція типів для generic-функцій і колбеків.
 * - Завдання: переписати функції з any/unknown на generics з обмеженнями.
 */

//!======================================================
// generics дозволяють писати одну функцію для різних типів без any, зберігаючи підказки.

// function foo(x: any) {
//   console.log(x);
//   return x + "Hello";
// }

// function getFirstElement<T>(arr: T[]): T {
//   const elem = arr[0];
//   return elem;
// }
// getFirstElement<number>([10, 20, 30, 40, 50]);
// getFirstElement<string>(["Hello", "World", "Test"]);
//!=========================================

// function getRandomArr<T>(x: T, y: T) {
//   const arr = [x, y];
//   return arr;
// }
// getRandomArr<number>(10,20)

//!======================================================
// інференція: TS часто виводить T із аргументів, тож явний <T> потрібен лише інколи.
// function getFirstElement<T1, T2>(arr: T[]): T {
//   const elem = arr[0];
//   return elem;
// }
// getFirstElement([10, 20, 30, 40]);
// getFirstElement(["Hello", "World"]);

//!=========================================

//!======================================================
/* 🧩 Task 1 — перший елемент
 * Заміни any/unknown на generics і додай обмеження, якщо треба.
 */
// export function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

//!=========================================
/* 🧩 Task 2 — перемішування
 * Типізуй shuffle так, щоб зберігався тип елементів без any.
 */

// export function shuffle<T>(array: T[]): T[] {
//   return array.sort(() => Math.random() - 0.5);
// }

//!=========================================
/* 🧩 Task 3 — сховище
 * Використай generics для збереження/завантаження без кастів.
 */

// export function saveToStorage<T>(key: string, value: T) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// saveToStorage<string>("userName", "Vasya");
// saveToStorage<number>("userName", "Vasya");

//!=========================================

// export function loadFromStorage(key: string): unknown {
//   const item = localStorage.getItem(key);
//   if (item !== null) {
//     return JSON.parse(item);
//   }
//   return null;
// }

//!=========================================
/* 🧩 Task 4 — max за селектором
 * Додай generics та обмеження для selector, щоб не втратити тип елемента.
 */

// export function max<T>(array: T[], selector: (item: T) => number): T {
//   return array.reduce((prev, curr) =>
//     selector(curr) > selector(prev) ? curr : prev,
//   );
// }

//!=========================================

// const arrowFn = <T1, T2>(x: T1, y: T2): void => {};
