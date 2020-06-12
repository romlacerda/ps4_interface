import styled from 'styled-components';

const StyledBox = styled.div`
  height: ${(props) => (props.selected ? '300px' : '200px')};
  width: ${(props) => (props.selected ? '280px' : '200px')};
  background-color: blue;
  margin: 0.2%;
  transition: width 0.2s, height 0.2s;
  border: ${(props) => (props.selected ? '1px solid #6eb1df' : 'none')};
  box-shadow: ${(props) => (props.selected ? '0px 0px 10px #4775bf, 0px 0px 10px #4775bf inset' : 'none')};
  background-image: url(${(props) => props.image});
  background-position: 50%;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  & > div {
    background: black;
    color: #FFF;
    display: ${(props) => (props.selected ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    
  }
`;

export default StyledBox;
