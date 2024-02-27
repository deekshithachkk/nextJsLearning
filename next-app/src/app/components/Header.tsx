import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import { navData, themeColor } from "../helper/constant";

export function Header() {
  return (
    <TopNav>
      <nav>
        {navData.map((item) => (
          <NavLink href={item.path} key={item.title}>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </TopNav>
  );
}

const TopNav = styled.div`
  background-color: ${themeColor.gray};
  display: flex;
  justify-content: center;
  color: ${themeColor.white};
  font-size: 1rem;
  line-height: 5.5rem;
`;
const NavLink = styled(Link)`
  padding: 0 3rem;
  &:hover {
    color: ${themeColor.yellow};
  }
`;
