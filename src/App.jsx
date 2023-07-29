import { Box, Container, Grid, Typography, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={{ padding: "1rem 0" }}>
        <Container maxWidth="xl">
          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            <Grid container spacing={1}>
              {productImages.map((img, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <img
                    src={img}
                    alt="item image"
                    style={{ maxWidth: "768px", width: "100%" }}
                  />
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{ padding: ".5rem 1rem", maxWidth: "500px", width: "100%" }}
            >
              <Stack direction="column" spacing={0.5}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "medium", textTransform: "uppercase" }}
                >
                  cult.sport
                </Typography>
                
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
