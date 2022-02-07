import { graphql } from 'react-relay';

export const AppTeamsFragment = graphql`
  fragment TeamsFragment on ReactTeam
    @refetchable(queryName: "SkillsListPaginationQuery") {
    # id
    # name
    skillConnection(first: $first, after: $after)
      @connection(key: "teams__skillConnection") {
      edges {
        cursor
        node {
          name
          ...ItemFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
