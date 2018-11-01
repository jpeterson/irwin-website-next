import React from 'react';
import { Card, Label } from 'semantic-ui-react';

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

    if (!labels.length) return <span>no environments</span>;

    return (
      <>
        <Label.Group size="mini">{labels}</Label.Group>
      </>
    );
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>{team.name}</Card.Header>
        <Card.Meta>{team.systemName}</Card.Meta>
        <Card.Description>{team.technicalPoc}</Card.Description>
      </Card.Content>
      <Card.Content extra>{getEnvLabels(team)}</Card.Content>
    </Card>
  );
}

export default TeamItem;
