import React from 'react';
import { useParams } from 'react-router-dom';
import CardProductPage from '../../components/pages/CardProductPage';
import { data } from '../../helpers/index';

const CardProductContainer = () => {
  const { id } = useParams();
  const user = data.find((el) => el.id === id)!;
  return (
    <div>
      <CardProductPage product={user} />
    </div>
  );
};

export default CardProductContainer;
