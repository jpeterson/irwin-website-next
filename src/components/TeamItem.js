import React from 'react';
import { Card, Icon, Label } from 'semantic-ui-react';

function TeamItem({ team }) {
  const getEnvLabels = team => {
    const labels = [];

    if (team.prod) {
      labels.push(
        <Label key="prod" color="teal" horizontal>
          PROD
        </Label>
      );
    }

    if (team.oat) {
      labels.push(
        <Label key="oat" color="green" horizontal>
          OAT
        </Label>
      );
    }

    if (team.test) {
      labels.push(
        <Label key="test" color="olive" horizontal>
          TEST
        </Label>
      );
    }

    if (!labels.length)
      return (
        <span style={{ fontStyle: 'italic' }}>
          No access to IRWIN environments.
        </span>
      );

    return (
      <>
        <Label.Group size="mini">{labels}</Label.Group>
      </>
    );
  };

  const getPocEmail = poc => {
    if (!poc.email) return null;

    return (
      <a href={`mailto:${team.technicalPoc.email}`}>
        <Icon name="mail" size="small" /> {team.technicalPoc.email}
      </a>
    );
  };

  const getRoleLabels = team => {
    return <Label size="mini">{team.category}</Label>;
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>{team.name}</Card.Header>
        <Card.Meta>{team.systemName}</Card.Meta>
        <Card.Description>
          {team.technicalPoc.name}
          <p>{getPocEmail(team.technicalPoc)}</p>
          <p>{getRoleLabels(team)}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>{getEnvLabels(team)}</Card.Content>
    </Card>
  );
}

export default TeamItem;
