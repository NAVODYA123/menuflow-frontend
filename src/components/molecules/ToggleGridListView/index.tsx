'use client";';
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ViewListIcon from "@mui/icons-material/ViewList";

type ToggleGridListViewProps = {
  handleChange: () => void;
  gridView: boolean;
};

export const ToggleGridListView = ({
  handleChange,
  gridView,
}: ToggleGridListViewProps) => {
  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={gridView}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <AppsIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
