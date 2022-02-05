import { graphql } from 'babel-plugin-relay/macro';

export const AppTeamsQuery = graphql`
  query TeamsQuery {
    Teams {
      id
      name
      ...TeamsFragment
      ...HeaderFragment
    }
  }
`;
