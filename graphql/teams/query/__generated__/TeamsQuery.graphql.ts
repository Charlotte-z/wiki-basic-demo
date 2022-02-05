/**
 * @generated SignedSource<<0c4668ef0ec4607715f8eaa46c6f4e5b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TeamsQuery$variables = {};
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "args": null,
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
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Skills",
            "kind": "LinkedField",
            "name": "skills",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "27871e5782cf09754cf6ab70080b7a69",
    "id": null,
    "metadata": {},
    "name": "TeamsQuery",
    "operationKind": "query",
    "text": "query TeamsQuery {\n  Teams {\n    id\n    name\n    ...TeamsFragment\n    ...HeaderFragment\n  }\n}\n\nfragment HeaderFragment on ReactTeam {\n  id\n  name\n}\n\nfragment ItemFragment on Skills {\n  name\n}\n\nfragment TeamsFragment on ReactTeam {\n  id\n  name\n  skills {\n    name\n    ...ItemFragment\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d20ef76ee6a103dcda516b8275d77964";

export default node;
