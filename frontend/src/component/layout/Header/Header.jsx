import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Badge,
  Tooltip,
  Zoom,
} from "@material-ui/core";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import mewLogo2 from "../../../images/mew logo2.PNG";
// import logoT from "../../../images/FL.png";
import logoT from "../../../images/test.png";

import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

import { BiHomeAlt } from 'react-icons/bi';
import {BiBookBookmark} from 'react-icons/bi';
import { FaShapes } from 'react-icons/fa';
import { FaAppStoreIos } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';


const useStyles = makeStyles(() => ({
  header: {
    background: "linear-gradient(to right,rgb(180, 215, 243), rgb(56, 214, 214))",
    paddingRight: "0px",
    paddingLeft: "0px",
    zIndex: 8,
    "@media (max-width: 900px)": {

    },
  },
  // logo: {
  //   height: 80,
  //   width: 150,
  //   fontFamily: "Work Sans, sans-serif",
  //   fontWeight: 600,
  //   color: "rgba(0, 0, 0, 0.5)",  // Adjust the last value (0.5) for the desired transparency level
  //   textAlign: "left",
  // },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    fontSize: "18px",
    marginLeft: "1vmax",
    "@media (max-width: 1000px)": {
      fontSize: "15px",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(to right, rgb(180, 215, 243), rgb(56, 214, 214))",
  },
  drawerContainer: {
    padding: "10px",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const { cartItems } = useSelector((state) => state.cart);

  const headersData = [
    {
      label: (
        // <Tooltip title="Home" arrow TransitionComponent={Zoom}>
        //   <HomeIcon style={{ fontSize: "35PX" }} />
        // </Tooltip>
        <button type="button" class="p-0 custom-button" data-bs-toggle="tooltip" data-bs-html="true" title="Home" style={{ border: 'none', backgroundColor: 'transparent',  }}>
          <BiHomeAlt size="35" />
        </button>
      ),
      href: "/",
    },
    {
      label: (
        // <Tooltip title="Products" arrow TransitionComponent={Zoom}>
        //   <CategoryIcon style={{ fontSize: "35PX" }} />
        // </Tooltip>
        <button type="button" class="p-0 custom-button" data-bs-toggle="tooltip" data-bs-html="true" title="Products" style={{ border: 'none', backgroundColor: 'transparent',  }}>
          <FaShapes size="29"/>
        </button>
      ),
      href: "/products",
    },
    {
      label: (
        // <Tooltip title="About" arrow TransitionComponent={Zoom}>
        //   <AttractionsIcon style={{ fontSize: "35PX" }} />
        // </Tooltip>
      <button type="button" class="p-0 custom-button" data-bs-toggle="tooltip" data-bs-html="true" title="About" style={{ border: 'none', backgroundColor: 'transparent',  }}>
        <FaAppStoreIos size="35" style={{color:"white"}}/>
      </button>
      ),
      href: "/about",
    },
    {
      label: (
        // <Tooltip title="Contact" arrow TransitionComponent={Zoom}>
        //   <LocalPostOfficeIcon style={{ fontSize: "35PX" }} />
        // </Tooltip>
        <button type="button" class="p-0 custom-button" data-bs-toggle="tooltip" data-bs-html="true" title="Contact" style={{ border: 'none', backgroundColor: 'transparent',  }}>
          <BiBookBookmark size="32" />
        </button>
      ),
      href: "/contact",
    },
    {
      label: (
        // <Tooltip title="Search" arrow TransitionComponent={Zoom}>
        //   <SearchIcon style={{ fontSize: "35PX" }} />
        // </Tooltip>
      <button type="button" class="p-0 custom-button" data-bs-toggle="tooltip" data-bs-html="true" title="Search" style={{ border: 'none', backgroundColor: 'transparent',  }}>
        <FaSearch size="28" />
      </button>
      ),
      href: "/search",
    },

    {
      label: (
        // <Tooltip title="Cart" arrow TransitionComponent={Zoom}>
        //   <Badge badgeContent={cartItems.length} color="error">
        //     <LocalMallIcon
        //       style={{
        //         fontSize: "35PX",
        //         color: cartItems.length > 0 ? "black" : "unset",
        //       }}
        //     />
        //   </Badge>
        // </Tooltip>
      <button type="button" class="p-0 custom-button" data-bs-toggle="tooltip" data-bs-html="true" title="Cart" style={{ border: 'none', backgroundColor: 'transparent',  }}>
        <AiOutlineShoppingCart size="35" />
      </button>
      ),
      href: "/cart",
    },
    {
      label: (
        // <Tooltip title="Account" arrow TransitionComponent={Zoom}>
        //   <CgProfile style={{ fontSize: "35PX" }} />
        // </Tooltip>
      <button type="button" class="p-0 custom-button" data-bs-toggle="tooltip" data-bs-html="true" title="Search" style={{ border: 'none', backgroundColor: 'transparent',  }}>
        <CgProfile size="35" />
      </button>
      ),
      href: "/login",
      name: "Dashboard",
    },
  ];

  const headersDataMobile = [
    {
      label: (
        // <IconButton style={{ color: "white", fontWeight: "bold" }}>
        //   <HomeIcon style={{ fontSize: "35PX" }} />
        //   Home
        // </IconButton>
      <button className="btn d-flex align-items-center" style={{ color: "white", fontWeight: "bold" , fontSize:"25px"}}>
        <BiHomeAlt style={{ fontSize: '35px' }} className="me-2 mb-1" />
        Home
      </button>
      ),
      href: "/",
    },
    {
      label: (
        // <IconButton style={{ color: "white", fontWeight: "bold" }}>
        //   <AttractionsIcon style={{ fontSize: "35PX" }} />
        //   About
        // </IconButton>
      <button className="btn d-flex align-items-center" style={{ color: "white", fontWeight: "bold" , fontSize:"25px"}}>
        <FaAppStoreIos style={{ fontSize: '35px' }} className="me-2 mb-1" />
        About
      </button>
      ),
      href: "/about",
    },
    {
      label: (
        // <IconButton style={{ color: "white", fontWeight: "bold" }}>
        //   <LocalPostOfficeIcon style={{ fontSize: "35PX" }} />
        //   Contact
        // </IconButton>
      <button className="btn d-flex align-items-center" style={{ color: "white", fontWeight: "bold" , fontSize:"25px"}}>
        <BiBookBookmark style={{ fontSize: '35px' }} className="me-2 mb-1" />
        Contact
      </button>
      ),
      href: "/contact",
    },
    {
      label: (
        // <IconButton style={{ color: "white", fontWeight: "bold" }}>
        //   <CategoryIcon style={{ fontSize: "35PX" }} />
        //   Product
        // </IconButton>
      <button className="btn d-flex align-items-center" style={{ color: "white", fontWeight: "bold" , fontSize:"25px"}}>
        <FaShapes style={{ fontSize: '30px' }} className="me-2 mb-1" />
        Product
      </button>
      ),
      href: "/products",
    },
    {
      label: (
        // <IconButton style={{ color: "white", fontWeight: "bold" }}>
        //   <SearchIcon style={{ fontSize: "35PX" }} />
        //   Search
        // </IconButton>
      <button className="btn d-flex align-items-center" style={{ color: "white", fontWeight: "bold" , fontSize:"25px"}}>
        <FaSearch style={{ fontSize: '35px' }} className="me-2 mb-1" />
        Search
      </button>
      ),
      href: "/search",
    },
    {
      label: (
        // <IconButton style={{ color: "white", fontWeight: "bold" }}>
        //   <Badge badgeContent={cartItems.length} color="error">
        //     <LocalMallIcon
        //       style={{
        //         fontSize: "35PX",
        //         color: cartItems.length > 0 ? "black" : "unset",
        //       }}
        //     />
        //   </Badge>
        //   Cart
        // </IconButton>
      <button className="btn d-flex align-items-center" style={{ color: "white", fontWeight: "bold" , fontSize:"25px"}}>
        <AiOutlineShoppingCart style={{ fontSize: '35px' }} className="me-2 mb-1" />
        Cart
      </button>
      ),
      href: "/cart",
    },
    {
      label: (
        // <IconButton style={{ color: "white", fontWeight: "bold" }}>
        //   <AccountCircleIcon style={{ fontSize: "35PX" }} />
        //   Account
        // </IconButton>
      <button className="btn d-flex align-items-center" style={{ color: "white", fontWeight: "bold" , fontSize:"25px"}}>
        <CgProfile style={{ fontSize: '35px' }} className="me-2 mb-1" />
        Account
      </button>
      ),
      href: "/login",
    },
  ];

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon style={{ fontSize: "35PX" }} />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {mobileSideBarLogo}
            {getDrawerChoices()}
          </div>
        </Drawer>
        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersDataMobile.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Link href="/" className="FloraLeaft  d-flex align-items-center">
        <img
          style={{
            height: 90,
            width: 100,
          }}
          
          src={logoT}
          alt="Logo"
        />
    </Link>
  );

  const mobileSideBarLogo = (
    <Link href="/" className="FloraLeaft d-flex align-items-center">
        <img
          style={{
            height: 100,
            width: 100,
          }}
          className="ms-5"
          src={logoT}
          alt="Logo"
        />
    </Link>
  );
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <a
          key={label}
          href={href}
          className="btn menu-button"
        >
          {label}
        </a>
      );
    });
  };
  // const getMenuButtons = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <Button
  //         {...{
  //           key: label,
  //           color: "inherit",
  //           to: href,
  //           component: RouterLink,
  //           className: menuButton,
  //         }}
  //       >
  //         {label}
  //       </Button>
  //     );
  //   });
  // };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
