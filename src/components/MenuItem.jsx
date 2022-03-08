import React, { useState } from 'react'
import styled from "styled-components";

import { Link } from "react-router-dom";
import {
    Assessment,
    ChatBubble,
    CurrencyRupeeSharp,
    DynamicFeed,
    Email,
    Home,
    LocalMall,
    PermIdentity,
    Report,
    Timeline,
    TrendingUp,
    Work,
  } from "@mui/icons-material";
const ListItem = styled.li`
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  border-radius: 10px;
  background-color:  "#c5ffff" ;
  &:hover {
    background-color: #c5ffff;
  }
`;



const IconSize = "18px";
const marginInline = "10px";
const MenuItem = (menu) => {
    var selected = menu.selected;
    
    console.log(selected+"selected");
    const [selection, setSelection] = useState();
    console.log(selection+"selection");

  return (
      <>
    <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to={"/"+menu.selected}
              >
              {selection === (menu.selected) ? (
                  <ListItem style={{ backgroundColor: "#c5ffff" }}>
                  {" "}
                  <PermIdentity
                    style={{ fontSize: IconSize, marginInline: marginInline }}
                    />
                  Users
                </ListItem>
              ) : (
                  <ListItem onClick={() => setSelection(menu.selected)}>
                  <PermIdentity
                    style={{ fontSize: IconSize, marginInline: marginInline }}
                    />
                  Users
                </ListItem>
              )}
              </Link>
              </>
  )
}

export default MenuItem