import { Container, createTheme, ThemeProvider, Typography } from "@mui/material";
import { ContactFrom } from "../../features/contact-form/ui/contact-from";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  }
})

export const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        padding: "165px 20px",
        backgroundColor: "#F5F5F5",
        borderTop: "1px solid rgba(0, 0, 0, 0.3)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
        [theme.breakpoints.up("lg")]: {
          maxWidth: "100%",
        }
      }}>
        <Typography 
          variant="h1" 
          sx={{
            fontSize: "36px",
            letterSpacing: "-0.03em",
            fontWeight: "700",
            fontFamily: "Inter", 
            [theme.breakpoints.up("sm")]: {
              fontSize: "72px"
            }
          }}
        >
          Only CTA on the page
        </Typography>
        <ContactFrom 
          width={320} 
          marginTop="30px" 
          padding="20px" 
          borderRadius="8px"
          border="1px solid rgba(0, 0, 0, 0.2)"
        />
      </Container>
    </ThemeProvider>

 );
}
