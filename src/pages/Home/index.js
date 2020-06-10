import React, { useState, useEffect, useRef } from 'react';
import Box from '../../components/Box/styles';
import Wrapper from '../../components/Wrapper/styles';
// import { usePrevious } from '../../hooks';

const Home = () => {
  const [selectedBox, setSelectedBox] = useState(0);
  const prevSelectedBoxRef = useRef();
  const baseX = 10;
  const baseWidth = 270;
  // const prevSelectedBox = usePrevious(selectedBox);

  useEffect(() => {
    prevSelectedBoxRef.current = selectedBox;
  });


  function handleChangeBox(e) {
    const id = Number(e.target.id);
    setSelectedBox(id);
  }

  useEffect(() => {
    // const way = selectedBox > prevSelectedBox ? '-' : '+';
    const newX = selectedBox === 0 ? baseWidth : selectedBox * baseWidth;
    if (selectedBox === 0) {
      document.getElementById('boxes').style.transform = `translate(${baseX}%, 0)`;
    } else {
      document.getElementById('boxes').style.transform = `translate(calc(${baseX}% - ${newX}px), 0)`;
    }
  }, [selectedBox]);


  function handleChangeKey(e) {
    const direction = e.key.code === 39 ? 'right' : 'left';
    setSelectedBox(direction === 'right' ? e.target.id + 1 : e.target.id - 1);
  }

  return (
    <>
      <Wrapper>
        <div id="boxes" style={{ display: 'flex' }}>
          <Box id={0} onClick={handleChangeBox} onKeyDown={handleChangeKey} selected={selectedBox === 0} />
          <Box id={1} onClick={handleChangeBox} selected={selectedBox === 1} />
          <Box id={2} onClick={handleChangeBox} selected={selectedBox === 2} />
          <Box id={3} onClick={handleChangeBox} selected={selectedBox === 3} />
          <Box id={4} onClick={handleChangeBox} selected={selectedBox === 4} />
          <Box id={5} onClick={handleChangeBox} selected={selectedBox === 5} />
        </div>
      </Wrapper>

    </>
  );
};

export default Home;
