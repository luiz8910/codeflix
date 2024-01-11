import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Category, createCategory } from "./categorySlice";
import { Link } from "react-router-dom";
import { CategoryFrom } from "./components/CategoryFrom";
import { useAppDispatch } from "../../app/hooks";

export const CreateCategory = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const [categoryState, setCategoryState] = useState<Category>({
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCategoryState({ ...categoryState, [name]: value });
    console.log(name, value);
  };
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setCategoryState({ ...categoryState, [name]: checked });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(createCategory(categoryState));
  }

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Category create</Typography>
          </Box>
        </Box>

        <CategoryFrom
          category={categoryState}
          isDisabled={isDisabled}
          isLoading={false}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </Paper>
    </Box>
  );
};
