import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import { navData } from "../helper/constant";

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
  background-color: rgb(69 76 95 / 92%);
  display: flex;
  justify-content: center;
  color: white;
  font-size: 1rem;
  line-height: 5.5rem;
`;
const NavLink = styled(Link)`
  padding: 0 3rem;
  &:hover {
    color: yellow;
  }
`;
