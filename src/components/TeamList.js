import React from 'react';
import { Card } from 'semantic-ui-react';

import TeamItem from './TeamItem';

function TeamList({ teams }) {
  return (
    <div>
      <Card.Group itemsPerRow={3}>
        {teams.map(team => (
          <TeamItem key={team.id} team={team} />
        ))}
      </Card.Group>
    </div>
  );
}

export default TeamList;
