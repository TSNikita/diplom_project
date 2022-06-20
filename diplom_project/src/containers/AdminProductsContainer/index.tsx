import React from 'react';
import { useParams } from 'react-router-dom';
import CardProductPage from '../../components/pages/CardProductPage';
import { itemsCard } from '../../helpers';

const AdminProductsContainer = () => {
  const { id } = useParams();
  const adminProduct = itemsCard.find((el) => el.id === id)!;
  return (
    <div>
      <CardProductPage product={adminProduct} />
    </div>
  );
};

export default AdminProductsContainer;
