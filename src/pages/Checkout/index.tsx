import { Box } from "@mui/material";
import { DataGridPro, GridSlotsComponentsProps } from "@mui/x-data-grid-pro";
import { useContext } from "react";
import { useCheckoutColumn } from "./hooks";
import { useAppSelector } from "utils/redux/hooks";
import { selectShoopingCartItemsDetails } from "store/shoppingCart/shoppingCartSelector";

declare module "@mui/x-data-grid" {
  interface FooterPropsOverrides {
    cartTotal: number;
  }
}
export function CustomFooterStatusComponent(
  props: NonNullable<GridSlotsComponentsProps["footer"]>
) {
  return (
    <Box sx={{ p: 1, display: "flex" }}>Total {`$${props.cartTotal}`}</Box>
  );
}

const Checkout = () => {
  const columns = useCheckoutColumn();
  const { cartItems, cartTotal } = useAppSelector(selectShoopingCartItemsDetails);
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          color: "#00f",
        }}
      >
        Checkout your order
      </h2>

      <Box>
        <DataGridPro
          rows={cartItems}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
          slots={{
            footer: CustomFooterStatusComponent,
          }}
          slotProps={{
            footer: { cartTotal },
          }}
        />
      </Box>
    </>
  );
};
export default Checkout;
