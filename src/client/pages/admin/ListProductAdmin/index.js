import { List, Datagrid, TextField } from "react-admin";

export const listProduct = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="categoryId" />
      <TextField source="quantityInStock" />
      <TextField source="discountId" />
      <TextField source="image" />
      <TextField source="created_at" />
      <TextField source="updated_at" />
      <TextField source="price" />
    </Datagrid>
  </List>
);
