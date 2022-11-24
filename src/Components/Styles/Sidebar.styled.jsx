import styled from "styled-components";

const Sidebar = styled.div`
  display: flex;
  position: fixed;
  width: fit-content;
  height: 100%;
  background-color: black;
  color: white;
  li:hover {
    background-color: gray;
  }
`;
export default Sidebar;
