/**
 * @generated SignedSource<<1771032d2d306c009a45ecc12ec3f6e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TeamsFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly skills: ReadonlyArray<{
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"ItemFragment">;
  }>;
  readonly " $fragmentType": "TeamsFragment";
};
export type TeamsFragment = TeamsFragment$data;
export type TeamsFragment$key = {
  readonly " $data"?: TeamsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TeamsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "limit"
    },
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "pageSize"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./SkillsListPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "TeamsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": [
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
      "concreteType": "Skill",
      "kind": "LinkedField",
      "name": "skills",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ItemFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ReactTeam",
  "abstractKey": null
};
})();

(node as any).hash = "690ee877c2bbfd40e6cd9b01eb766f11";

export default node;
