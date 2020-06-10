import styled from 'styled-components';

const Box = styled.div`
  height: ${(props) => (props.selected ? '370px' : '270px')};
  width: ${(props) => (props.selected ? '370px' : '270px')};
  background-color: blue;
  margin: 0.2%;
  transition: width 0.2s, height 0.2s;
  
`;

export default Box;
