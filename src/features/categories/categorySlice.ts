import { createSlice } from "@reduxjs/toolkit";

interface Category {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  description: null | string;
}

const category: Category = {
  id: "1",
  name: "Orange",
  description: "Fruit",
  is_active: true,
  deleted_at: null,
  created_at: "2024-01-01T00:00:00",
  updated_at: "2024-01-01T00:00:00",
};

export const initialState = [
  {
    id: "1",
    name: "Apple",
    description: "Fruit",
    is_active: true,
    deleted_at: null,
    created_at: "2024-01-01T00:00:00",
    updated_at: "2024-01-01T00:00:00",
  },
  {
    id: "2",
    name: "Strawberry",
    description: "Fruit",
    is_active: true,
    deleted_at: null,
    created_at: "2024-01-01T00:00:00",
    updated_at: "2024-01-01T00:00:00",
  },
  {
    id: "3",
    name: "Watermelon",
    description: "Fruit",
    is_active: true,
    deleted_at: null,
    created_at: "2024-01-01T00:00:00",
    updated_at: "2024-01-01T00:00:00",
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    addCategory: (state, action) => {},
    deleteCategory: (state, action) => {},
    updateCategory: (state, action) => {},
  },
});

export default categoriesSlice.reducer;
