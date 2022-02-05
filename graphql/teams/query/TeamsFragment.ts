import { graphql } from 'react-relay';

export const AppTeamsFragment = graphql`
  fragment TeamsFragment on ReactTeam {
    id
    name
    skills {
      name
      ...ItemFragment
    }
  }
`;
