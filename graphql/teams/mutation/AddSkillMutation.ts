import { graphql } from 'react-relay';
export const AddSkill = graphql`
  mutation AddSkillMutation($memberName: String, $skill: String) {
    addSkill(memberName: $memberName, skill: $skill) {
      edge {
        node {
          name
        }
      }
    }
  }
`;
