import React, { FormEvent, useEffect, useState } from 'react';
import { trigger } from 'swr';

import Button from '../../../../components/Button';
import TextInput from '../../../../components/Forms/TextInput';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import api from '../../../../services/api';

import { 
  Container, 
  DeleteButton,
  TrashIcon
} from './styles';

interface Props {
  categoryToUpdate?: {
    _id: string;
    name: string;
  }
}

const CategoryForm: React.FC<Props> = ({categoryToUpdate}) => {
  const stringUser = localStorage.getItem('user') || '';
  const user = JSON.parse(stringUser);

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(categoryToUpdate?.name|| '');
  }, [categoryToUpdate]);

  const handleSubmit = (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (categoryToUpdate) {
      api.put(`/category/${categoryToUpdate._id}/${user._id}`, { name }).then(res => {
        trigger('/category');
        setName('');
      }).finally(() => setLoading(false));
    } else {
      api.post(`/category/${user._id}`, { name }).then(res => {
        trigger('/category');
        setName('');
      }).finally(() => setLoading(false));
    }
  }

  const handleDelete = ( ) => {
    if (categoryToUpdate) {
      setLoading(true);
      api.delete(`/category/${categoryToUpdate._id}/${user._id}`).then(res => {
        trigger('/category');
        setName('');
      }).finally(() => setLoading(false));
    }

  }

  return (
    <Container onSubmit={handleSubmit}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TextInput
            required
            placeholder='categoria'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Button type='submit'>
            Criar categoria
          </Button>
          {categoryToUpdate?._id && (
            <DeleteButton onClick={handleDelete}>
              <TrashIcon />
              Deletar
            </DeleteButton>
          )}
        </>
      )}
    </Container>
  );
}

export default CategoryForm;