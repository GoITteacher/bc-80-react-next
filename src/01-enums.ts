/**
 * Перелічення (enum) та літеральні об'єднання.
 *
 * План:
 * - Коли обрати union замість enum, а коли enum корисний.
 * - Строкові vs числові enum-и, автонумерація.
 * - Підказки й захист від опечаток завдяки літералам.
 * - Завдання: оголосити статуси, коди відповіді та ролі користувача.
 */

//!=========================================
// type UserRole = "$ADMIN" | "STUDENT" | "TEACHER";

// function isAdmin1(role: UserRole) {
//   if (role === "ADMIN") {
//     console.log("hello admin");
//   }
// }
// function isAdmin2(role: UserRole) {
//   if (role === "ADMIN") {
//     console.log("hello admin");
//   }
// }
// function isAdmin3(role: UserRole) {
//   if (role === "ADMIN") {
//     console.log("hello admin");
//   }
// }
// function isAdmin4(role: UserRole) {
//   if (role === "ADMIN") {
//     console.log("hello admin");
//   }
// }

//!=========================================
// enum UserRole {
//   ADMIN = "$ADMIN",
//   STUDENT = "STUDENT__",
//   TEACHER = "TEACHER",
// }

// function isAdmin1(role: UserRole) {
//   if (role === UserRole.ADMIN) {
//     console.log("Hello Admin");
//   }
//   console.log(UserRole);
// }

//!======================================================
// union vs enum: union простіший і не генерує додатковий код; enum додає рантайм-об'єкт і зручний, коли потрібні посилання в JS-коді.
//!======================================================
// string vs number enums: рядкові уникють зворотного мапінгу; числові можуть автонумерувати, але вимагають обережності.

//!=========================================
// type QueryResponseCode = 200 | 201 | 400 | 401 | 403 | 409 | 404 | 500;

// function showStatusCode(code: QueryResponseCode) {
//   if (code === 200) {
//   } else if (code === 409) {
//   }
// }
//!=========================================

// enum StatusCode {
//   SUCCESS = 200,
//   CREATED = 201,
//   USER_ERROR = 400,
//   AUTH_ERROR = 401,
//   NOT_FOUND = 404,
//   SERVER_ERROR = 500,
// }

// function showStatusMessage(code: StatusCode) {
//   if (code === StatusCode.SUCCESS) {
//     console.log("OK");
//   } else if (code === StatusCode.CREATED) {
//     console.log("Успішно створенно");
//   }
// }

//!=========================================
// type DeliveryStatus = "IN_PROCESS" | "CANCELED" | "DELIVERED";

// function showStatus(status: DeliveryStatus) {
//   if (status === "IN_PROCESS") {
//     console.log("Parcel in proces");
//   } else if (status === "CANCELED") {
//     console.log("Parcel in proces");
//   }
// }

//!=========================================
// enum DeliveryStatus {
//   IN_PROCESS, // 0
//   DELIVERED, // 1
//   CANCELED, // 2
// }

// function showStatus(status: DeliveryStatus) {
//   if (status === DeliveryStatus.IN_PROCESS) {
//     console.log("Parcel in proces");
//   } else if (status === DeliveryStatus.CANCELED) {
//     console.log("Parcel in proces");
//   }
// }
//!======================================================
// підказки: літеральні типи дають автокомпліт і перевірку значень; enum робить те саме, але через властивості об'єкта.

// type DeliveryStatus = "DELIVERED" | "CANCELED" | "IN_PROCESS";
// function foo(status: DeliveryStatus) {}

//!======================================================
/* 🧩 Task 1 — статуси запиту
 * Заміни any на літеральний union або enum зі значеннями pending/fulfilled/rejected.
 */

// enum RequestStatus {
//   PENDING = "pending",
//   FULFILLED = "fulfilled",
//   REJECTED = "rejected",
// }

// export const requestStatus: RequestStatus = RequestStatus.PENDING;

//!=========================================
/* 🧩 Task 2 — коди відповіді
 * Опиши або union чисел, або enum з кодами 200/201/400/500.
 * Зараз тип надто широкий.
 */

enum RequestCode {
  SUCCESS = 200,
  CREATED = 201,
  USER_ERROR = 400,
  SERVER_ERROR = 500,
}
export const requestCode: RequestCode = 200;

//!=========================================
/* 🧩 Task 3 — ролі користувача
 * Створи ролі admin/user/guest через union чи enum.
 * Типізуй поле role у користувача.
 */

// export enum Role {
//   ADMIN = "адмін",
//   USER = "користувач",
//   GUEST = "гість",
// }

// export interface User {
//   username: string;
//   role: Role;
// }

// enum SortField {
//   CREATED_AT,
//   CREATED_AT,
//   CREATED_AT,
// }

// export const currentUser: User = {
//   username: "jacob",
//   role: Role.ADMIN,
// };
