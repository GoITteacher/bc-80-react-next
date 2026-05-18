/**
 * Власні типи: об'єднання (union), літеральні типи, перевірки типів (type guards).
 *
 * Що показати:
 * - Приклади union: number | string для ідентифікаторів.
 * - Літеральні типи: фіксовані статуси чи ролі.
 * - Type guards: перевірка typeof/символи in для звуження типу.
 *
 */
//!=========================================

// type UserAge = number | string;
// const userAge: UserAge = 25;
// const userAge2: UserAge = "30";

//!=========================================

// type UserName = string;
// const firstName: UserName = "Vasya";
// const lastName: UserName = "Klopotenko";

//!======================================================
// union: дозволяє кілька варіантів типу (number | string) без any.

//!======================================================
// літеральні типи: обмежують значення до конкретних рядків/чисел, зручно для статусів/ролей.

// type UserRole = "admin" | "student" | "teacher";
// type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
// const userRole: UserRole = "admin";

//!======================================================
// type guards: перевірка typeof/Array.isArray/"prop" in звужує union до конкретного варіанта.
//!======================================================

//!======================================================
/* 🧩 Task 1 — ідентифікатор
 * Заміни any на union number|string і відформатуй для обох випадків.
 */
//!=========================================
// export type Identifier = string | number;

// export const formatId = (id: Identifier) => {
//   return typeof id === "number" ? `#${id}` : id.toUpperCase();
// };

//!=========================================

/* 🧩 Task 2 — статуси замовлення
 * Опиши літеральні статуси, щоб заборонити довільні рядки.
 */
// export type OrderStatus = 'pending' | 'shipped' | 'done';
// export const nextStatus = (status: OrderStatus): OrderStatus => {
//   if (status === "pending") return "shipped";
//   return "done";
// };

/* 🧩 Task 3 — type guard
 * Додай звуження типу для різних форм payload.
 */

interface UserPayload {
  name: string;
  balance: number;
  role: "user";
}
interface AdminPayload {
  name: string;
  password: string;
  role: "admin";
}

export type Payload = UserPayload | AdminPayload;

export function handlePayload(payload: Payload) {
  if (payload.role === "user") {
    console.log(payload.balance);
  }

  if (payload.role === "admin") {
    console.log(payload.password);
  }
}
