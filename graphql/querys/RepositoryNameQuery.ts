import { graphql } from "react-relay";

graphql`
  query RepositoryNameQuery {
    # feel free to change owner/name here
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;
