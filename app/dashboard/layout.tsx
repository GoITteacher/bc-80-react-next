import React from "react";

interface LayoutProps {
  diagram1: React.ReactNode;
  diagram2: React.ReactNode;
  diagram3: React.ReactNode;
  children: React.ReactNode;
}

const Layout = ({ diagram1, diagram2, diagram3, children }: LayoutProps) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {diagram1}
      {diagram2}
      {diagram3}
      {children}
    </div>
  );
};

export default Layout;
