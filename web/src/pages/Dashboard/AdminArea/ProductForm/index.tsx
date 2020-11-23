import React, { FormEvent, useState } from 'react';
import { trigger } from 'swr';

import Button from '../../../../components/Button';
import Dropzone from '../../../../components/Forms/Dropzone';
import SelectInput from '../../../../components/Forms/SelectInput';
import TextInput from '../../../../components/Forms/TextInput';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import api from '../../../../services/api';

import { 
  Container, 
  DeleteButton,
  TrashIcon,

  ImageContainer,
  FieldsContainer
} from './styles';

interface Props {
  productToUpdateId?: string;
}

const ProductForm: React.FC<Props> = ({productToUpdateId}) => {
  const stringUser = localStorage.getItem('user') || '';
  const user = JSON.parse(stringUser);
  const [formData, setFormData] = useState({
    name: '',
    photo: '',// File
    description: '',
    price: '',// number
    category: '',// category
    quantity: '',// number
    sold: '',// number
    shipping: '',// bool
  }); 

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (productToUpdateId) {
      api.put(`/product/${productToUpdateId}/${user._id}`, { name }).then(res => {
        trigger('/products');
      }).finally(() => setLoading(false));
    } else {
      api.post(`/product/${user._id}`, { name }).then(res => {
        trigger('/products');
      }).finally(() => setLoading(false));
    }
  }

  const handleDelete = ( ) => {
    if (productToUpdateId) {
      setLoading(true);
      api.delete(`/product/${productToUpdateId}/${user._id}`).then(res => {
        trigger('/products');
        setName('');
      }).finally(() => setLoading(false));
    }

  }

  return (
    <Container onSubmit={handleSubmit}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <fieldset>
          <ImageContainer>
            <Dropzone onFileUploaded={() => {}}/>
          </ImageContainer>
          <FieldsContainer>
            <TextInput
              required
              placeholder='Título'
            />
            <TextInput
              required
              placeholder='Descrição'
            />
            <TextInput
              required
              mask='currency'
              placeholder='Preço'
            />
            <TextInput
              required
              placeholder='Quantidade'
            />
            <SelectInput 
              options={[]}
            />
            <Button type='submit'>
              Criar produto
            </Button>
            {productToUpdateId && (
              <DeleteButton onClick={handleDelete}>
                <TrashIcon />
                Deletar
              </DeleteButton>
            )}
          </FieldsContainer>
        </fieldset>
      )}
    </Container>
  );
}

export default ProductForm;