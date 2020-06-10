import styled from 'styled-components';

const Box = styled.div`
  width: 270px;
  height: 270px;
  background-color: blue;
  /* margin: 0.2%; */
  border: ${(props) => {
    console.log(props);
    return (props.selected ? '1px solid red' : '');
  }}
  
`;

export default Box;
