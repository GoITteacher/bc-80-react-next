"use client";

import { refresh, getMe } from "@/services/auth";
import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, setUser, clearUser } = useAuthStore();

  useEffect(() => {
    async function getUser() {
      if (isAuth) return;

      const { success } = await refresh();

      if (success) {
        const user = await getMe();
        if (user) {
          setUser(user);
        }
      }
    }

    getUser();
  }, []);

  return children;
};

export default AuthProvider;
