import { graphql } from 'react-relay';
export const RemoveSkill = graphql`
  mutation RemoveSkillMutation($memberName: String, $skill: String) {
    removeSkill(memberName: $memberName, skill: $skill) {
      id @deleteRecord
      name
    }
  }
`;
``;
