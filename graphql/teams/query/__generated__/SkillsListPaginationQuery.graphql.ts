/**
 * @generated SignedSource<<bc47f05fda208eaa7384902d6fab6faf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SkillsListPaginationQuery$variables = {
  limit?: number | null;
  pageSize?: number | null;
  id: string;
};
export type SkillsListPaginationQueryVariables = SkillsListPaginationQuery$variables;
export type SkillsListPaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"TeamsFragment">;
  };
};
export type SkillsListPaginationQueryResponse = SkillsListPaginationQuery$data;
export type SkillsListPaginationQuery = {
  variables: SkillsListPaginationQueryVariables;
  response: SkillsListPaginationQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": 1,
  "kind": "LocalArgument",
  "name": "limit"
},
v2 = {
  "defaultValue": 1,
  "kind": "LocalArgument",
  "name": "pageSize"
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "limit",
    "variableName": "limit"
  },
  {
    "kind": "Variable",
    "name": "pageSize",
    "variableName": "pageSize"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SkillsListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": (v4/*: any*/),
            "kind": "FragmentSpread",
            "name": "TeamsFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SkillsListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v6/*: any*/),
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "Skill",
                "kind": "LinkedField",
                "name": "skills",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "ReactTeam",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "31a2adfeba5ffdf12c465307f11fa98e",
    "id": null,
    "metadata": {},
    "name": "SkillsListPaginationQuery",
    "operationKind": "query",
    "text": "query SkillsListPaginationQuery(\n  $limit: Int = 1\n  $pageSize: Int = 1\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TeamsFragment_4ppVkE\n    id\n  }\n}\n\nfragment ItemFragment on Skill {\n  name\n}\n\nfragment TeamsFragment_4ppVkE on ReactTeam {\n  id\n  name\n  skills(pageSize: $pageSize, limit: $limit) {\n    name\n    ...ItemFragment\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "690ee877c2bbfd40e6cd9b01eb766f11";

export default node;
