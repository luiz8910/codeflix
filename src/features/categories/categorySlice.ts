import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  description: null | string;
}

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
    createCategory: (state, action) => {
      state.push(action.payload);
    },
    deleteCategory: (state, action) => {
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );

      state.splice(index, 1);
    },
    updateCategory: (state, action) => {
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );

      state[index] = action.payload;
    },
  },
});

//Selectors
export const selectCategories = (state: RootState) => state.categories;

//Select category by id
export const selectCategoryById = (state: RootState, id: string) => {
  const category = state.categories.find((category) => category.id === id);

  return (
    category || {
      id: "",
      name: "",
      description: "",
      is_active: false,
      deleted_at: null,
      created_at: "",
      updated_at: "",
    }
  );
};

export default categoriesSlice.reducer;
export const { createCategory, updateCategory, deleteCategory } =
  categoriesSlice.actions;
