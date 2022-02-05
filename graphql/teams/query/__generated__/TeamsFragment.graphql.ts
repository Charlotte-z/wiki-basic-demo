/**
 * @generated SignedSource<<48d8d104559fddb2a60d7ea0c0e49572>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
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
      "args": null,
      "concreteType": "Skills",
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

(node as any).hash = "08fb068b80b7cdcd49ae1d709ed3c0ac";

export default node;
