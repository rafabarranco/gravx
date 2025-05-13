import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className="p-2 bg-blue-600 text-white rounded">{children}</button>;
};
