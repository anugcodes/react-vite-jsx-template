import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Paper,
  InputBase,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";

function App() {
  return (
    <>
      <Box sx={{ padding: "1rem 0" }}>
        <Container maxWidth="xl">
          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            <Grid container spacing={1}>
              {productImages.map((img, index) => (
                <Grid item xs={12} lg={6} key={index}>
                  <img
                    src={img}
                    alt="item image"
                    style={{ maxWidth: "768px", width: "100%" }}
                  />
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                padding: ".5rem 1rem",
                width: "100%",
                maxWidth: { lg: "500px" },
              }}
            >
              <Stack direction="column" spacing={0.5}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "500",
                    textTransform: "uppercase",
                    color: "#555",
                  }}
                >
                  cult.sport
                </Typography>
                <ProductHeading />
                <ProductDetails />
                <DeliveryDetails />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default App;

const productImages = [
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/nLsLM13ksU8JkxMUejPQaqtK",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/Zh2qn5yVtqMcuTV8bxmRKvKY",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/yQnBgxkBkVBLiT4uESQZf2Zg",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/3C9Evy3XKBCY22djcUpNGwdp",
];

function SizeSelect() {
  const [size, setSize] = useState("S");
  return (
    <Box sx={{ padding: ".5rem 0" }}>
      <Typography variant="subtitle2">
        Choose Size: ({" "}
        <a href="#" style={{ textDecoration: "none", color: "pink" }}>
          Size Guide
        </a>
        )
      </Typography>
      <ToggleButtonGroup
        value={size}
        exclusive
        onChange={(e, newSize) => setSize(newSize)}
        aria-label="Choose Size"
        size="large"
      >
        <ToggleButton value="S" aria-label="small">
          S
        </ToggleButton>
        <ToggleButton value="M" aria-label="medium">
          M
        </ToggleButton>
        <ToggleButton value="L" aria-label="large">
          L
        </ToggleButton>
        <ToggleButton value="XL" aria-label="extra large" disabled>
          XL
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

function ProductHeading() {
  return (
    <Box sx={{ paddingBottom: "2rem" }}>
      <Stack direction="column" spacing={1}>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          Typographic Print Everyday T-shirt
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body1" sx={{ color: "#f13171" }}>
            &#8377;1149
          </Typography>
          <Typography variant="body1">
            <s>&#8377;1799</s>
          </Typography>
          <Box
            sx={{ color: "white", background: "#f5a623", padding: ".25rem" }}
          >
            36% OFF
          </Box>
        </Stack>
        <Typography variant="body2" sx={{ color: "#777" }}>
          This Typographic T-shirt is a surefire way to merge street fashion
          with total comfort, and we&lsquo;re here for it. Featuring the classic
          crew neckline, these T-shirts are hyper-versatile and on trend every
          season. So why wait when you can revamp your casuals with striking
          bold graphics!
        </Typography>
      </Stack>
      {/* select size */}
      <SizeSelect />
      {/* add to cart and buy now buttons */}
      <ActionBtns />
    </Box>
  );
}

function ActionBtns() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        sx={{
          borderRadius: "1.5rem",
          width: "100%",
          background: "#f7433d",
          padding: ".5rem 0",
        }}
      >
        Add to Cart
      </Button>
      <Button
        variant="contained"
        sx={{
          borderRadius: "1.5rem",
          width: "100%",
          background: "#f7433d",
          padding: ".5rem 0",
        }}
      >
        Buy Now
      </Button>
    </Stack>
  );
}

function ProductDetails() {
  return (
    <Box sx={{ padding: ".5rem 0" }}>
      <Typography
        variant="body1"
        sx={{ textTransform: "uppercase", color: "#444" }}
      >
        Product Details
      </Typography>
      <List
        sx={{
          listStyleType: "disc",
          listStylePosition: "inside",
        }}
      >
        <ListItem dense sx={{ display: "list-item" }}>
          Colour: Maroon
        </ListItem>
        <ListItem dense sx={{ display: "list-item" }}>
          Fabric: 65% Cotton 35% Polyester
        </ListItem>
        <ListItem dense sx={{ display: "list-item" }}>
          Graphic
        </ListItem>
        <ListItem dense sx={{ display: "list-item" }}>
          Soft and Durable
        </ListItem>
      </List>
      <hr />
    </Box>
  );
}

function DeliveryDetails() {
  return (
    <Box sx={{ padding: ".5rem 0" }}>
      <Paper
        component="form"
        variant="outlined"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter Pincode"
          inputProps={{ "aria-label": "Enter Pincode" }}
        />
        <Button variant="" sx={{ p: "10px" }}>
          Check
        </Button>
      </Paper>

      <List
        sx={{
          listStyleType: "disc",
          listStylePosition: "inside",
        }}
      >
        <ListItem dense sx={{ display: "list-item" }}>
          Free delivery within 5-7 days
        </ListItem>
        <ListItem dense sx={{ display: "list-item" }}>
          Easy 15 days return available
        </ListItem>
        <ListItem dense sx={{ display: "list-item" }}>
          15 days exchange available
        </ListItem>
        <ListItem dense sx={{ display: "list-item" }}>
          Pay on Delivery is not available
        </ListItem>
      </List>
      <hr />
    </Box>
  );
}
