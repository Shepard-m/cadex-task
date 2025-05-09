import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkButton = styled(Link)`
  background-color: black;
  padding: 6px 55px;
  border-radius: 6px;
  color: white;
  text-decoration: none;
  border: 1px solid transparent;

  transition: all 0.3s ease-in;

  &:hover,
  &:focus {
    color: black;
    background-color: white;
    border: 1px solid black;
    
    transition: 
      background-color 0.5s ease,
      color 0.5s ease 0.3s,
      border 0.5s ease;
  }
`
