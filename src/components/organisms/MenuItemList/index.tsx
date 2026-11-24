"use client";

import { MenuItem } from "@/app/data";
import { MenuItemCard } from "@/components/molecules/MenuItemCard";
import { MenuItemTable } from "@/components/molecules/MenuItemTable";
import { ToggleGridListView } from "@/components/molecules/ToggleGridListView";
import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";

type MenuItemListProps = {
  menuItems: MenuItem[];
};

export const MenuItemList = ({ menuItems }: MenuItemListProps) => {
  const [gridView, setGridView] = useState<boolean>(true);

  const handleViewChange = () => {
    setGridView((prev) => !prev);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: 4,
        px: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          mb: 2,
        }}
      >
        {" "}
        <ToggleGridListView
          handleChange={handleViewChange}
          gridView={false}
        />{" "}
      </Box>
      <Box sx={{ display: "flex" }}>
        {gridView ? (
          <Grid container spacing={2}>
            {menuItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <MenuItemCard
                  item={item}
                  onAdd={() => {}}
                  onRemove={() => {}}
                  onDelete={() => {}}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <MenuItemTable
            menuItems={menuItems}
            onAdd={() => {}}
            onRemove={() => {}}
            onDelete={() => {}}
          />
        )}
      </Box>
    </Box>
  );
};
