import React, { useState } from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

import {
  Container,
  Sidebar,
  Panel,
  AddIcon,
  CrossIcon
} from './styles';

const AdminArea: React.FC = () => {
  const [currentEntity, setCurrentEntity] = useState(1);
  const [adding, setAdding] = useState(false);

  const entities = [
    { value: 1, label: 'Produtos' },
    { value: 2, label: 'Categorias' },
  ];

  const getEntityLabel = (value: number) => {
    const entity = entities.find(i => i.value === value);
    return entity?.label || '';
  }
  
  const CurrentList = (entityValue: number) => {
    switch (entityValue) {
      case 1: return <ProductList adding={adding}/>;
      case 2: return <CategoryList adding={adding}/>;
    }
  }

  return (
    <Container>
      <h2>Área do administrador</h2>
      <div>
        <Sidebar>
          <ul>
            {entities.map(({ label, value }) => (
              <li key={value}>
                <button
                  className={currentEntity === value ? 'active' : ''}
                  onClick={() => setCurrentEntity(value)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </Sidebar>
        <Panel>
          <header>
            <h3>{getEntityLabel(currentEntity)}</h3>
            <ul>
              <li>
                {adding ? (
                  <button onClick={() => setAdding(false)}><CrossIcon /> Cancelar</button>
                ) : (
                  <button onClick={() => setAdding(true)}><AddIcon /> Adicionar</button>
                )}
              </li>
            </ul>
          </header>
          <section>
            {CurrentList(currentEntity)}
          </section>
        </Panel>
      </div>
    </Container>
  );
}

export default AdminArea;