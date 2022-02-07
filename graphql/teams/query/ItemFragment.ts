import { graphql } from 'react-relay';

export const AppItemFragment = graphql`
  fragment ItemFragment on Skill {
    name
  }
`;
