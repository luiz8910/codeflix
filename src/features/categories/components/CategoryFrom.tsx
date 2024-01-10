import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Switch, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../categorySlice";


export function CategoryFrom() {

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

    type Props = {
        category: Category,
        isDisabled: false,
        onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    };


  const handleChange = (e: any) => {};
  const handleToggle = (e: any) => {};

    return (
        <Box p={2}>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      name="name"
                      required
                      label="Name"
                      variant="outlined"
                      value={category.name}
                      onChange={handleChange}
                      disabled={isDisabled}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      name="description"
                      required
                      label="Description"
                      variant="outlined"
                      value={category.description}
                      onChange={handleChange}
                      disabled={isDisabled}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          name="is_active"
                          color="secondary"
                          onChange={handleToggle}
                          checked={category.is_active}
                        />
                      }
                      label="Active"
                    />
                  </FormGroup>
                </Grid>

                <Grid item xs={12}>
                  <Box display="flex" gap={2}>
                    <Button
                      variant="contained"
                      component={Link}
                      to="/categories"
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      color="secondary"
                      disabled={isDisabled}
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
    );
}