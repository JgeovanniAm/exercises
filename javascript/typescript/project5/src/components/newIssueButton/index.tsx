import React, { useState } from 'react';

export default ({ funcHandleClick }: { funcHandleClick: (state: boolean) => void }) => {
   const [toogle, setToggle] = useState<Istate>({ state: true });

   const handleClick = () => {
      setToggle({ ...toogle, state: !toogle.state });
      funcHandleClick(toogle.state);
   }
   return <button onClick={handleClick}>{toogle.state?'new Issue': 'x'}</button>
};

interface Istate {
   state: boolean
}

