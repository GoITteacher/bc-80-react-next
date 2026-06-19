"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";

const PrivateRoute = () => {
  const route = useRouter();
  const isAuth = useAuthStore((s) => s.isAuth);

  useEffect(() => {
    if (!isAuth) {
      route.push("/");
    }
  }, []);

  return <> </>;
};

export default PrivateRoute;
