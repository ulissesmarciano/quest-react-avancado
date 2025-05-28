import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 21px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0861A6;
  border-radius: 30px;
  transition: background-color 0.4s;
`;

const Circle = styled.span`
  position: absolute;
  height: 20px;
  width: 20px;
  left: 1px;
  bottom: 0.5px;
  background-color: #ffffff;
  border-radius: 50%;
  transition: transform 0.4s;
  transform: ${({ checked }) => (checked ? "translateX(30px)" : "translateX(0)")};
  z-index: 2;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #ffffff;
  z-index: 1;
  pointer-events: none;

  &.left {
    left: 4px;
  }

  &.right {
    right: 1px;
  }
`;

export const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <Switch>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <Slider />
      <Circle checked={checked} />
      <IconWrapper className="left">
        <FaSun size={16} />
      </IconWrapper>
      <IconWrapper className="right">
        <FaMoon size={16} />
      </IconWrapper>
    </Switch>
  );
};

