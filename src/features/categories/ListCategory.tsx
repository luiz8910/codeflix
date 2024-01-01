import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";

export const CategoryList = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1">
        CategoryList Page
      </Typography>
    </Box>
  );
};
