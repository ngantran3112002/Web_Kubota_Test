import { List, Datagrid, TextField } from "react-admin";

export const listOrders = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="user_id" />
      <TextField source="payment_id" />
      <TextField source="total" />
      <TextField source="status" />
      <TextField source="create_at" />
      <TextField source="update_at" />
    </Datagrid>
  </List>
);
