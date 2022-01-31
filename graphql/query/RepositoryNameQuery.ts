import { graphql } from 'babel-plugin-relay/macro';

export const AppRepositoryNameQuery = graphql`
  query RepositoryNameQuery {
    repository(owner: "charlotte-z", name: "ts-generic-magic") {
      name
    }
  }
`;
