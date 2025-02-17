import { Alert, Button, IconButton, TextField } from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CheckCircleOutline } from "@mui/icons-material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name) {
  return { name };
}

const rows = [createData("Frozen yoghurt"), createData("Ice cream sandwich")];

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Design = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="container1 py-26">
        <div className="text-center ">
          <h1 className="text-[14px] text-[#0073e6] font-bold">
            Production-ready components
          </h1>
          <h1 className="text-[36px] font-bold max-[530px]:text-[25px]">
            Beautiful and powerful,
            <br />
            <span className="text-[#0073e6]">right out of the box</span>
          </h1>
          <div className="flex items-center gap-2 justify-center">
            <Button
              variant="outlined"
              className=" !text-[10px] !rounded-[12px]">
              Custom theme
            </Button>
            <Button
              variant="contained"
              className=" !text-[10px] !rounded-[12px]">
              Material Design
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 my-10 rounded-xl overflow-hidden border max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
          <div className="p-3 border border-gray-400 ">
            <div className="flex items-center gap-3 ">
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]">
                Small
              </button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]">
                Medium
              </button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]">
                Large
              </button>
            </div>
            <div className="w-fit mx-auto py-20">
              <Button endIcon={<AddShoppingCartIcon />}> Add To Cart</Button>
            </div>
            <button>Button</button>
          </div>
          <div className="p-3 border border-gray-400 ">
            <div className="flex items-center gap-3 ">
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]">
                Small
              </button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]">
                Medium
              </button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]">
                Large
              </button>
            </div>
            <div className="w-fit mx-auto py-20">
              <Alert
                icon={<CheckCircleOutline fontSize="inherit" />}
                severity="info">
                Check out this alert!
              </Alert>
            </div>
            <button>Alert</button>
          </div>
          <div className="p-3 border border-gray-400 ">
            <div className="flex items-center gap-3 ">
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]">
                Small
              </button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]">
                Medium
              </button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]">
                Large
              </button>
            </div>
            <div className="w-fit mx-auto py-20">
              <TextField
                id="outlined-required"
                label="Username"
                defaultValue="Ultraviolet"
              />
            </div>
            <button>Text Field</button>
          </div>
          <div className="p-3 border border-gray-400 ">
            <div className="flex items-center gap-3 ">
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]"></button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]"></button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]"></button>
            </div>
            <div className="w-fit mx-auto py-20">
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                Dashboard
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            <button>Menu</button>
          </div>
          <div className="p-3 border border-gray-400 ">
            <div className="flex items-center gap-3 ">
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]"></button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]"></button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]"></button>
            </div>
            <div className="w-fit mx-auto py-4">
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <button>table</button>
          </div>
          <div className="p-3 border border-gray-400 ">
            <div className="flex items-center gap-3 ">
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]"></button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]"></button>
              <button className=" py-1 border-b-2 border-b-white hover:border-b-[#0073e6] transition-all text-[14px] font-medium hover:text-[#0073e6]"></button>
            </div>
            <div className="w-fit mx-auto text-center py-14">
              <h1 className="text-[14px] font-bold">Want to see more?</h1>
              <p className="text-[#303741] text-[14px]">
                Check out the docs for details of the <br />
                complete library.
              </p>

              <Button> Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
