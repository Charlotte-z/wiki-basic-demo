/**
 * @generated SignedSource<<3c745e5b47c6d597e86e597bdaf699e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddSkillMutation$variables = {
  memberName?: string | null;
  skill?: string | null;
};
export type AddSkillMutationVariables = AddSkillMutation$variables;
export type AddSkillMutation$data = {
  readonly addSkill: {
    readonly name: string;
  };
};
export type AddSkillMutationResponse = AddSkillMutation$data;
export type AddSkillMutation = {
  variables: AddSkillMutationVariables;
  response: AddSkillMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "memberName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "skill"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "memberName",
    "variableName": "memberName"
  },
  {
    "kind": "Variable",
    "name": "skill",
    "variableName": "skill"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddSkillMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Skills",
        "kind": "LinkedField",
        "name": "addSkill",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddSkillMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Skills",
        "kind": "LinkedField",
        "name": "addSkill",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2cd97f10391bd61b9242318aa03e2a10",
    "id": null,
    "metadata": {},
    "name": "AddSkillMutation",
    "operationKind": "mutation",
    "text": "mutation AddSkillMutation(\n  $memberName: String\n  $skill: String\n) {\n  addSkill(memberName: $memberName, skill: $skill) {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "67dc93fbbed2e8c07fdaddb08772561c";

export default node;
