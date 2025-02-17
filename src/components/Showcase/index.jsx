import React, { useState } from "react";
import Showcaseimg from "../../assets/images/Showcase.png";
import {
  Avatar,
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slider,
  Typography,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar } from "@mui/x-date-pickers";
import { Box, Grid, styled } from "@mui/system";
import reptile from "../../assets/images/reptile.png";
import avatar1 from "../../assets/images/avatar1.png";
import time from "../../assets/icons/time.svg";
import arrows from "../../assets/icons/arrows.svg";
import change from "../../assets/icons/change.svg";
import prev from "../../assets/icons/prev.svg";
import play from "../../assets/icons/play.svg";
import next from "../../assets/icons/next.svg";
import repeat from "../../assets/icons/repeat.svg";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
const Showcase = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  let [range, setrange] = useState(60);
  const Separator = styled("div")(
    ({ theme }) => `
    height: ${theme.spacing(2)};
  `
  );
  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 37,
      label: "37°C",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }
  return (
    <div className="max-w-[1400px] !ml-auto min-[1500px]:m-auto min-[1500px]:w-[1500px] max-[900px]:m-auto ">
      <div className="flex items-center gap-10 justify-between ">
        <div className="w-[50%] pl-10 max-[900px]:w-full max-[900px]:text-center  max-[900px]:p-10 max-[500px]:p-5">
          <h1 className="text-[50px] font-bold max-[550px]:text-[30px] max-[425px]:text-[25px]">
            <span className="text-[#0D7DEC]">Move faster</span> with intuitive
            React UI tools
          </h1>
          <p className="text-[#303741] max-[550px]:text-[14px]">
            MUI offers a comprehensive suite of free UI tools to help you ship
            new features faster. Start with Material UI, our fully-loaded
            component library, or bring your own design system to our
            production-ready components.
          </p>
          <button className="p-3 px-5 max-[425px]:text-[14px] bg-[#0D7DEC] rounded-2xl mt-5 hover:bg-[#0d7cecd3] transition-all">
            <p className="text-[15px] text-white font-medium">{`Discover the Core libraries >`}</p>
          </button>
        </div>
        <div className="relative w-[60%] overflow-hidden max-[900px]:hidden flex items-center gap-10 py-10">
          <div className="">
            <div className="rounded-[12px] bg-[#0D7DEC] p-6 w-full">
              <div className="flex items-center gap-1.5">
                <img src={time} alt="" />
                <p className="text-white font-semibold text-[12px]">
                  March 25th
                </p>
              </div>
              <br />
              <img src={arrows} alt="" />
              <p className="text-white font-normal pt-3">
                Customize every button and chip <br /> instance primary color
              </p>
              <br />
              <div className="flex items-center gap-2">
                <img src={avatar1} alt="" />
                <div>
                  <h1 className="text-[12px] text-[#cce6ff]">Assigned to</h1>
                  <p className=" text-[14px] font-semibold text-white">
                    Lucas Smith
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Slider
                  size="small"
                  onChange={(e) => setrange(e.target.value)}
                  defaultValue={range}
                  aria-label="Small"
                  className="!text-white"
                  valueLabelDisplay="auto"
                />
                <p>{range}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 my-5">
              <p className="px-2 p-0.5 rounded-2xl bg-[#ebf5ff] border border-[#9cf] w-fit text-[14px] text-[#0061c2]">
                MUI
              </p>
              <p className="px-2 p-0.5 rounded-2xl bg-[#fffbeb] border border-[#ffda47] w-fit text-[14px] text-[#8a5300]">
                React
              </p>
              <p className="px-2 p-0.5 rounded-2xl bg-[#e9fbf0] border border-[#9aefbc] w-fit text-[14px] text-[#0f5c2e]">
                CSS
              </p>
              <p className="px-2 p-0.5 rounded-2xl bg-[#fff0f1] border border-[#febdc3] w-fit text-[14px] text-[#92010e]">
                TypeScript
              </p>
              <p className="px-2 p-0.5 rounded-2xl bg-[#f6f7f8] border border-[#cad0d8] w-fit text-[14px] text-[#303741]">
                JavaScript
              </p>
            </div>

            <div className="border rounded-xl w-fit !border-gray-300">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DateCalendar />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
          <div>
            <Box>
              <ButtonGroup aria-label="Basic button group">
                <Button>Joy UI</Button>
                <Button>Material UI</Button>
                <Button>MUI Base</Button>
              </ButtonGroup>
            </Box>
            <Box>
              <Typography id="track-false-range-slider" gutterBottom>
                Removed track range slider
              </Typography>
              <Slider
                track={false}
                aria-labelledby="track-false-range-slider"
                getAriaValueText={valuetext}
                defaultValue={[20, 37]}
                marks={marks}
              />
            </Box>
            <Box>
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>Joy UI</Button>
                <Button>Material UI</Button>
                <Button>MUI Base</Button>
              </ButtonGroup>
            </Box>
            <br />
            <div className="p-[17px] border !border-gray-400 rounded flex items-center gap-10 ">
              <img src={reptile} alt="" />
              <div className="flex items-center gap-2 justify-center flex-col">
                <div className="text-center">
                  <h1 className="text-[14px] font-bold ">
                    Contemplative Reptile
                  </h1>
                  <p className="text-[14px] font-normal">Sounds of Nature</p>
                </div>
                <div className="flex items-center gap-2 ">
                  <button className="p-2 rounded-[12px] border !border-[#e8eaee] hover:bg-[#e5e4e477] active:scale-95">
                    <img src={change} alt="" />
                  </button>
                  <button className="p-2 rounded-[12px] border !border-[#e8eaee] hover:bg-[#e5e4e477] active:scale-95">
                    <img src={prev} alt="" />
                  </button>
                  <button className="p-2.5 rounded-[12px] border !border-[#e8eaee] bg-[#ebf5ff] hover:bg-[#ebf5ff96] active:scale-95">
                    <img src={play} alt="" />
                  </button>
                  <button className="p-2 rounded-[12px] border !border-[#e8eaee] hover:bg-[#e5e4e477] active:scale-95">
                    <img src={next} alt="" />
                  </button>
                  <button className="p-2 rounded-[12px] border !border-[#e8eaee] hover:bg-[#e5e4e477] active:scale-95">
                    <img src={repeat} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Avatar with text and icon
              </Typography>
              <Demo>
                <List dense={dense}>
                  {generate(
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      }>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Single-line item"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                  )}
                </List>
              </Demo>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
