import React from "react";

const NavListItems = () => {
    const NavListItems = [
        "Items-1",
        "Items-2",
        "Items-3"
    ];
  return (
    <>
      {
        NavListItems.map( NavListItem => <li> <a> {NavListItem} </a></li>, [])
      }
    </>
  );
};

export default NavListItems;
