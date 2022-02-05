import { graphql } from 'react-relay';

export const AppHeaderFragment = graphql`
  fragment HeaderFragment on ReactTeam {
    id
    name
  }
`;
