import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import Box from '../../components/Box/styles';
import Wrapper from '../../components/Wrapper/styles';
// import { usePrevious } from '../../hooks';
import ResidentEvil from '../../assets/games/re-3.svg';
import Fifa from '../../assets/games/fifa-20.svg';
import PsPlus from '../../assets/games/plus-2.svg';
import StarWars from '../../assets/games/star-wars.svg';

const Home = () => {
  const [selectedBox, setSelectedBox] = useState(0);
  const prevSelectedBoxRef = useRef();
  const baseX = 15;
  const baseWidth = 200;
  // const prevSelectedBox = usePrevious(selectedBox);


  useEffect(() => {
    prevSelectedBoxRef.current = selectedBox;
  });


  function handleChangeBox(e) {
    const id = Number(e.target.id);
    setSelectedBox(id);
  }

  function handleChangeKey(e) {
    if (e.keyCode !== 37 && e.keyCode !== 39) {
      return;
    }

    if (e.keyCode === 39) {
      setSelectedBox(selectedBox + 1);
    } else if (e.keyCode === 37) {
      setSelectedBox(selectedBox - 1);
    }
  }

  const cb = useCallback((e) => {
    handleChangeKey(e);
  }, []);

  document.addEventListener('keydown', (e) => handleChangeKey(e));

  useEffect(() => {
    // const way = selectedBox > prevSelectedBox ? '-' : '+';
    console.log('renderizou');
    const newX = selectedBox === 0 ? baseWidth : selectedBox * baseWidth;
    if (selectedBox === 0) {
      document.getElementById('boxes').style.transform = `translate(${baseX}%, 0)`;
    } else {
      document.getElementById('boxes').style.transform = `translate(calc(${baseX}% - ${newX}px), 0)`;
    }
  }, [selectedBox]);


  return (
    <>
      <Wrapper>
        <div id="boxes" style={{ display: 'flex', marginTop: '40px' }}>
          <Box id={0} onClick={handleChangeBox} selected={selectedBox === 0} image={PsPlus} />
          <Box id={1} onClick={handleChangeBox} selected={selectedBox === 1} image={StarWars} />
          <Box id={2} onClick={handleChangeBox} selected={selectedBox === 2} image={ResidentEvil} />
          <Box id={3} onClick={handleChangeBox} selected={selectedBox === 3} image={Fifa} />
          <Box id={4} onClick={handleChangeBox} selected={selectedBox === 4} />
          <Box id={5} onClick={handleChangeBox} selected={selectedBox === 5} />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
