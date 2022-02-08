import { graphql } from 'react-relay';

export const AppTeamsFragment = graphql`
  fragment TeamsFragment on ReactTeam
    @refetchable(queryName: "SkillsListPaginationQuery")
    @argumentDefinitions(
      pageSize: { type: "Int", defaultValue: 1 } # Optional argument
      limit: { type: "Int", defaultValue: 1 } # Required argument
    ) {
    id
    name
    skills(pageSize: $pageSize, limit: $limit) {
      name
      ...ItemFragment
    }
  }
`;
