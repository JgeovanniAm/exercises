import React, { useState, useEffect } from 'react';
import InfoCard from '../components/infoCard'
import mydata from '../services';

export default ({ match }) => {
  const [cardsInfo, setCardsInfo] = useState(null);

  useEffect(() => {
    mydata().then(result => {
      setCardsInfo(result.cards.find(x => x.id === match.params.id));
    })
  }, []);

  return (
    <>
      {cardsInfo &&
        <InfoCard section={match.params.section} cardsInfo={cardsInfo} />
      }
    </>
  )
}