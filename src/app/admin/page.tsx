/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { getAdminMenu } from "@/src/services/api";

export default function AdminMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    getAdminMenu(token).then((res) => {
      setMenu(res);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Manage Menu</h1>

      {menu.map((item: any) => (
        <div key={item._id} className="border p-3 mb-2 rounded">
          {item.name} - Rs. {item.price}
        </div>
      ))}
    </div>
  );
}
