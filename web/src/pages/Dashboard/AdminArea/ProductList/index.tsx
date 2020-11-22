import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import api from '../../../../services/api';
import ProductForm from '../ProductForm';

import {
  Container,
  EditIcon
} from './styles';

interface Props {
  adding: boolean;
}

interface ProductProps {
  _id: string;
  name: string;
  photo: any;
  description: string;
  price: number;
  category: CategoryProps;
  quantity: number;
  sold: number;
  shipping: boolean;
}

interface CategoryProps {
  _id: string;
  name: string;
}

const ProductList: React.FC<Props> = ({ adding }) => {
  const { data } = useSWR<ProductProps[]>('/products');
  const [productToUpdate, setProductToUpdate] = useState({} as ProductProps);

  useEffect(() => {
    setProductToUpdate({} as ProductProps);
  }, [data]);
  useEffect(() => {
    !adding && setProductToUpdate({} as ProductProps);
  }, [adding]);
  return (
    <>
      {(adding || productToUpdate._id)
        ? (<ProductForm />) : (
          <Container>
            <li className='header'>
              <span>Título</span>
              <span>Descrição</span>
              <span>Preço</span>
              <span>Categoria</span>
              <span>Qtd.</span>
              <span>Vendidos</span>
            </li>
            {data ? (
              data.map(p => (
                <li key={p._id}>
                  <span>{p.name}</span>
                  <span>{p.description.substring(20, 0) + '...'}</span>
                  <span>{p.price}</span>
                  <span>{p.category ? p.category.name : 'Categoria não encontrada'}</span>
                  <span>{p.quantity}</span>
                  <span>{p.sold}</span>
                  <button onClick={() => setProductToUpdate(p)}>
                    <EditIcon />
                  </button>
                </li>
              ))
            ) : (
                <LoadingSpinner />
              )}
          </Container>
        )}
    </>
  );
}

export default ProductList;