import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #ffffff;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10px;
`;

export const NavLink = styled(Link)`
  font-family: Roboto;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    font-weith: bold;
  }
`;

export const Bars = styled(FaBars)`
  color: #000000;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
