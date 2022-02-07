import { graphql } from 'babel-plugin-relay/macro';

export const AppTeamsQuery = graphql`
  query TeamsQuery($first: Int, $after: String) {
    Teams {
      id
      name
      ...TeamsFragment
      ...HeaderFragment
    }
  }
`;
