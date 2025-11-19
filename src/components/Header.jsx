import { useState } from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "About", "Projects", "Contact"];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: "#111827",
        height: "100%",
        pt: 5,
      }}
      role="presentation"
      onClick={handleDrawerToggle}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <Link
                to={item.toLowerCase()}
                smooth
                duration={500}
                className="drawer-link"
                style={{
                  width: "100%",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "#fff",
                  padding: "10px 0",
                }}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgba(17, 24, 39, 0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, md: 6 },
            py: 2,
          }}
        >
          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <span style={{ color: "#60a5fa" }}>{"<"}</span>
            Portfolio
            <span style={{ color: "#60a5fa" }}>{"/>"}</span>
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  className="nav-link"
                  style={{
                    cursor: "pointer",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    position: "relative",
                    color: "#fff",
                    transition: "color 0.3s",
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box" },
        }}
      >
        {drawer}
      </Drawer>

      {/* Styles for Animated Underline */}
      <style>
        {`
          .nav-link::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            left: 0;
            bottom: -4px;
            background-color: #60a5fa;
            transition: width 0.3s ease;
          }
          .nav-link:hover::after {
            width: 100%;
          }
          .nav-link:hover {
            color: #60a5fa;
          }
        `}
      </style>
    </>
  );
};

export default Header;
