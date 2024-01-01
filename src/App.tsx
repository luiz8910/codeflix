import { Box, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { appTheme } from "./config/theme";
import { Routes, Route } from "react-router-dom";
import { CategoryList } from "./features/categories/ListCategory";
import { CreateCategory } from "./features/categories/CreateCategory";
import { EditCategory } from "./features/categories/EditCategory";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<CategoryList />}></Route>
            <Route path="categories" element={<CategoryList />}></Route>
            <Route
              path="categories/create"
              element={<CreateCategory />}
            ></Route>

            <Route
              path="/categories/edit/:id"
              element={<EditCategory />}
            ></Route>

            <Route
              path="*"
              element={
                <Box>
                  <Typography variant="h1">404</Typography>
                  <Typography variant="h3" component="h1">
                    Page not found
                  </Typography>
                </Box>
              }
            ></Route>
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
