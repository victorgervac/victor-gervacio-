import styled from "styled-components";
import { FONT_SIZES } from "../styles/styles";

const fontSize = (size) => {
  switch (size) {
    case "large":
      return FONT_SIZES.LARGE;
    case "small":
      return FONT_SIZES.SMALL;
    default:
      return FONT_SIZES.DEFAULT;
  }
};

// Nice thing about styled componets, pass props change styles for a component
// define this once and reuse many times
const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
  font-size: ${(props) => fontSize(props.fSize)} !important;
`;

export default HeaderText;