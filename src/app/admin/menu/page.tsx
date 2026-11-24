"use client";
import { menuItems } from "@/app/data";
import { MenuItemList } from "@/components/organisms/MenuItemList";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Menu() {
  console.log(menuItems, "menu items of resturant");
  return (
    <Box>
      <>
        <MenuItemList menuItems={menuItems} />
      </>
    </Box>
  );
}
