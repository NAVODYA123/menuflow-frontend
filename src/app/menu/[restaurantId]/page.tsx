"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPublicMenu } from "@/services/api";
import { Box } from "@mui/material";
import { MenuItemList } from "@/components/organisms/MenuItemList";

export default function MenuPage() {
  const params = useParams();
  const restaurantId = params?.restaurantId as string;

  const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   if (!restaurantId) return;

  //   getPublicMenu(restaurantId).then((res) => {
  //     setMenu(res.data || []);
  //   });
  // }, [restaurantId]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Menu</h1>

      <Box>
        <MenuItemList menuItems={menu} />
      </Box>
    </div>
  );
}
