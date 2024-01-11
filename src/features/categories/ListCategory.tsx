import { Box, Button, IconButton, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteCategory, selectCategories } from "./categorySlice";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

  const dispatch = useAppDispatch();

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    is_active: category.is_active,
    created_at: new Date(category.created_at).toLocaleDateString("pt-BR"),
    //updated_at: category.updated_at,
  }));

  /* const rows: GridRowsProp = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ]; */

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, renderCell: renderNameCell },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "is_active",
      headerName: "Active",
      flex: 1,
      type: "boolean",
      renderCell: renderIsActiveCell,
    },
    {
      field: "created_at",
      headerName: "Created at",
      flex: 1,
    },
    {
      field: "id",
      headerName: "Actions",
      type: "string",
      flex: 1,
      renderCell: renderActionsCell,
    },
  ];

  function handleDeleteCategory(id: string) {
    dispatch(deleteCategory(id));
  }

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/categories/edit/${rowData.row.id}`}
      >
        <Typography color="primary">{rowData.row.name}</Typography>
      </Link>
    );
  }

  function renderActionsCell(params: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        onClick={() => handleDeleteCategory(params.value)}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    );
  }

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Active" : "Inactive"}
      </Typography>
    );
  }

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{ marginBottom: "1rem" }}
        >
          New Category
        </Button>
      </Box>

      {/* {categories.map((category) => (
        <Typography key={category.id}>{category.name}</Typography>
      ))} */}

      <Box sx={{ display: "flex", height: 600 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnFilter={true}
          disableColumnSelector={true}
          disableDensitySelector={true}
          components={{ Toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          //rowsPerPageOptions={[2, 20, 50, 100]}
        />
      </Box>
    </Box>
  );
};
