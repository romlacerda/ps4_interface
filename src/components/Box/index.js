import React from 'react';
import StyledBox from './styles';

const Box = ({
  id, onClick, selected, image,
}) => (
  <StyledBox id={id} onClick={onClick} selected={selected} image={image}>
    <div style={{ width: '100%', height: '50px' }}>
      Iniciar
    </div>
  </StyledBox>
);

export default Box;
