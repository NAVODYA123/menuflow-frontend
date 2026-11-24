// import { Question } from "@/types/question";
import { MenuItem } from "@/app/data";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

type MenuItemTableProps = {
  menuItems: MenuItem[];
  onAdd: (item: MenuItem) => void;
  onRemove: (item: MenuItem) => void;
  onDelete: (item: MenuItem) => void;
};

export const MenuItemTable = ({
  menuItems,
  onAdd,
  onRemove,
  onDelete,
}: MenuItemTableProps) => {
  const [count, setCount] = useState(0);

  const handleAddItem = (item: MenuItem) => {
    onAdd(item);
    setCount(count + 1);
  };

  const handleRemoveItem = (item: MenuItem) => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
    onRemove(item);
  };
  const handleDeleteItem = (item: MenuItem) => {
    if (count <= 1) {
      setCount(0);
      onDelete(item);
    }
  };

  return (
    <TableContainer component={Paper} sx={{ p: 2, backgroundColor: "#f0f0f0" }}>
      <Table
        sx={{
          minWidth: 800,
          borderCollapse: "separate",
          borderSpacing: "0 12px", // vertical gaps between rows
        }}
        aria-label="question table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: 600 }}>
              Image
            </TableCell>
            <TableCell align="left" sx={{ width: "200px", fontWeight: 600 }}>
              Name
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Description
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Price
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Veg/Non-veg
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Add or Remove
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuItems.map((item: MenuItem) => (
            <TableRow
              key={item.id}
              onClick={() => (window.location.href = `/menu/${item.id}`)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell colSpan={6} sx={{ p: 0, borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "table", // keeps cells aligned
                    width: "100%",
                    tableLayout: "fixed",
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                    transition: "0.3s all",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box sx={{ display: "table-row" }}>
                    <Box sx={{ display: "table-cell", padding: 2 }}>
                      {item.image}
                    </Box>
                    <Box
                      sx={{
                        display: "table-cell",
                        padding: 2,
                        textAlign: "center",
                      }}
                    >
                      {item.name}
                    </Box>
                    <Box
                      sx={{
                        display: "table-cell",
                        padding: 2,
                        textAlign: "center",
                      }}
                    >
                      {item.description}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        padding: 2,
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      ${item.price.toFixed(2)}
                    </Box>
                    <Box
                      sx={{
                        display: "table-cell",
                        padding: 2,
                        textAlign: "center",
                      }}
                    >
                      {item.type}
                    </Box>
                    <Box
                      sx={{
                        display: "table-cell",
                        padding: 2,
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "right",
                        }}
                      >
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddItem(item);
                          }}
                        >
                          <AddIcon />
                        </Button>
                        <Typography>{count}</Typography>
                        {count === 1 && (
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteItem(item);
                            }}
                          >
                            <DeleteIcon />
                          </Button>
                        )}
                        {count > 1 && (
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveItem(item);
                            }}
                          >
                            <RemoveIcon />
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
