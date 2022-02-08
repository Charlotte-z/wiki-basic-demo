/**
 * @generated SignedSource<<2987106b95e284b6213d2c7116bafa8e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TeamsQuery$variables = {
  pageSize?: number | null;
  limit?: number | null;
};
export type TeamsQueryVariables = TeamsQuery$variables;
export type TeamsQuery$data = {
  readonly Teams: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"TeamsFragment" | "HeaderFragment">;
  } | null>;
};
export type TeamsQueryResponse = TeamsQuery$data;
export type TeamsQuery = {
  variables: TeamsQueryVariables;
  response: TeamsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "limit"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pageSize"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TeamsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ReactTeam",
        "kind": "LinkedField",
        "name": "Teams",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": (v4/*: any*/),
            "kind": "FragmentSpread",
            "name": "TeamsFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HeaderFragment"
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
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TeamsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ReactTeam",
        "kind": "LinkedField",
        "name": "Teams",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Skill",
            "kind": "LinkedField",
            "name": "skills",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "85fb3d524305f5df34476e8799a15bd3",
    "id": null,
    "metadata": {},
    "name": "TeamsQuery",
    "operationKind": "query",
    "text": "query TeamsQuery(\n  $pageSize: Int\n  $limit: Int\n) {\n  Teams {\n    id\n    name\n    ...TeamsFragment_4ppVkE\n    ...HeaderFragment\n  }\n}\n\nfragment HeaderFragment on ReactTeam {\n  id\n  name\n}\n\nfragment ItemFragment on Skill {\n  name\n}\n\nfragment TeamsFragment_4ppVkE on ReactTeam {\n  id\n  name\n  skills(pageSize: $pageSize, limit: $limit) {\n    name\n    ...ItemFragment\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "92072a1d5bbf9d8ec32cb17256d924d5";

export default node;
