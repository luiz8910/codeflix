import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Category } from "./categorySlice";
import { Link } from "react-router-dom";

export const CreateCategory = () => {
  
  const [isDisabled, setIsDisabled] = useState(false);

  const [category, setCategory] = useState<Category>({
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: ""
  });



  const handleChange = (e: any) => {};
  const handleToggle = (e: any) => {};

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Category create</Typography>
          </Box>

          
        </Box>
      </Paper>
    </Box>
  );
};
