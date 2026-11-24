/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItem } from "@/app/data";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
} from "@mui/material";
// import Image from "next/image";
// import { StockBadge } from "@/atoms/StockBadge";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

type MenuItemCardProps = {
  item: MenuItem;
  count?: number;
  onAdd: (item: MenuItem) => void;
  onRemove: (item: MenuItem) => void;
  onDelete: (item: MenuItem) => void;
};

export const MenuItemCard = ({
  item,

  onAdd,
  onRemove,
  onDelete,
}: MenuItemCardProps) => {
  const [count, setCount] = useState(0);

  const handleAddItem = () => {
    onAdd(item);
    setCount(count + 1);
  };

  const handleRemoveItem = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
    onRemove(item);
  };
  const handleDeleteItem = () => {
    if (count <= 1) {
      setCount(0);
      onDelete(item);
    }
  };
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 350 }}>
      {/* <CardHeader title={item?.name} /> */}
      <CardMedia sx={{ height: 200 }} image={item?.image} title={item?.name} />

      <CardContent>
        {/* <Image src={item?.image} alt={item?.name} width={300} height={200} /> */}
        <Typography variant="h6">{item?.name}</Typography>
        <Typography variant="body2">{item?.description}</Typography>
        <Typography>Rs. {item?.price}</Typography>

        {/* <StockBadge inStock={item.inStock} /> */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "right",
          }}
          style={{ marginTop: 10 }}
        >
          <Button onClick={() => handleAddItem()}>
            <AddIcon />
          </Button>
          <Typography>{count}</Typography>
          {count === 1 && (
            <Button onClick={() => handleDeleteItem()}>
              <DeleteIcon />
            </Button>
          )}
          {count > 1 && (
            <Button onClick={() => handleRemoveItem()}>
              <RemoveIcon />
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
