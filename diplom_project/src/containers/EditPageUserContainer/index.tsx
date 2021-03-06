import React from 'react';
import { useParams } from 'react-router-dom';
import EditPageUser from '../../components/pages/EditPageUser';
import { itemsCard } from '../../helpers/index';

const EditPageUserContainer = () => {
  const { id } = useParams();
  const userEdit = itemsCard.find((el) => el.id === id)!;
  return (
    <div>
      <EditPageUser propsEdit={userEdit} />
    </div>
  );
};
export default EditPageUserContainer;
