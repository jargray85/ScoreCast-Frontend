import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// create a search icon
export const SearchIcon = styled(FaSearch)`
  color: gray;
`;

// create a search input field
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 5px;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 0 10px;
`;

// create a search bar container
export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//create linkstyled (needed for the link to the home page
export const LinkHomeStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;