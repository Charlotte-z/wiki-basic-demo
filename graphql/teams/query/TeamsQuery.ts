import { graphql } from 'babel-plugin-relay/macro';

export const AppTeamsQuery = graphql`
  query TeamsQuery($pageSize: Int, $limit: Int) {
    Teams {
      id
      name
      ...TeamsFragment @arguments(pageSize: $pageSize, limit: $limit)
      ...HeaderFragment
    }
  }
`;
