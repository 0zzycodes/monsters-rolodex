import React from 'react';

import '../card-list/card-list.css';
import { Card } from '../card/card';

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
