import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useNavigate } from "react-router";

const SingleProduct = ({ product }) => {
    const hisorty = useNavigate()
    const productDetails = () => {
        hisorty(`/p-${product?.title}-${product?.id}`)
    }
  return (
    <Card>
      <CardActionArea  onClick = {productDetails}>
        <CardMedia component="img" height="250" image={product?.image} />
      </CardActionArea>
      <CardActionArea onClick = {productDetails}>
        <CardContent>
          <Typography align="center" variant="h6">
            {product?.title}
          </Typography>
          <Typography align="center">
            {product?.old_price && (
              <Box
                component="span"
                style={{
                  fontWeight: "bold",
                  fontSize: "large",
                  textDecoration: "line-through",
                  color: "red",
                  padding: "5px",
                }}
              >
                {product?.old_price}TK
              </Box>
            )}
            <Box
              component="span"
              style={{
                fontWeight: "bold",
                fontSize: "large",
                padding: "5px",
              }}
            >
              {product?.price}TK
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          justifyContent: "center",
        }}
      >
        <Button
          endIcon={<AddShoppingCartIcon />}
          variant="outlined"
          size="large"
          color="primary"
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;