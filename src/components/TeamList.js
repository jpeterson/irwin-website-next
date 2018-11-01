import React from 'react';
import { Card } from 'semantic-ui-react';

import TeamItem from './TeamItem';

function TeamList({ teams }) {
  return (
    <div>
      <h1>IRWIN Community - Teams</h1>
      <Card.Group itemsPerRow={4}>
        {teams.map(team => (
          <TeamItem key={team.id} team={team} />
        ))}
      </Card.Group>
    </div>
  );
}

export default TeamList;
