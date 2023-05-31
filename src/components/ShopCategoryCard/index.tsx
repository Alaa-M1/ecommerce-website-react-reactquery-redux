import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { Category } from "types";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "utils/context/shoppingCartContext";

type ShopCategoryCardProps = {
  catInfo: Category;
};
const ShopCategoryCard = ({ catInfo }: ShopCategoryCardProps) => {
  const { setShowCart, addToCart } = useContext(ShoppingCartContext);
  const handleAddToCart = () => {
    addToCart(catInfo);
    setShowCart(true);
  };
  return (
    <Box className="shop-category-card">
      <Box className="shop-category-images">
        <img
          src={`${window.location.origin}/images/categories/${catInfo.categoryLabel}/${catInfo.categoryDetails.imagePath}`}
          alt={`${catInfo.categoryLabel}`}
          loading="lazy"
        />
      </Box>
      <Box className="shopping-btn">
        <Button variant="contained" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Box>
      <Box className="shop-category-info">{catInfo.categoryDetails.price}</Box>
    </Box>
  );
};
export default ShopCategoryCard;