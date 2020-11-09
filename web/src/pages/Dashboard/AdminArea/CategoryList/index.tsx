import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import CategoryForm from '../CategoryForm';

import { 
  Container,
  EditIcon
} from './styles';

interface Props {
  adding: boolean;
}

interface CategoryProps {
  _id: string;
  name: string;
}

const CategoryList: React.FC<Props> = ({ adding }) => {
  const { data } = useSWR<CategoryProps[]>('/category');
  const [categoryToUpdate, setCategoryToUpdate] = useState({} as CategoryProps);

  useEffect(() => {
    setCategoryToUpdate({} as CategoryProps);
  }, [data]);
  useEffect(() => {
    !adding && setCategoryToUpdate({} as CategoryProps);
  }, [adding]);
  return (
    <>
      <Container>
        <li className='header'>Categoria</li>
        {data ? (
          data.map(({ _id, name }) => (
            <li key={_id}>
              {name}
              <button onClick={() => setCategoryToUpdate({ _id, name})}>
                <EditIcon />
              </button>
            </li>
          ))
        ) : (
            <LoadingSpinner />
          )}
      </Container>
      {(adding || categoryToUpdate._id) && (<CategoryForm categoryToUpdate={categoryToUpdate}/>)}
    </>
  );
}

export default CategoryList;