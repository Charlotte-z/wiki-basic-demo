/**
 * @generated SignedSource<<9a504426f16e5b7024be02b9c8a6da10>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "ItemFragment";
};
export type ItemFragment = ItemFragment$data;
export type ItemFragment$key = {
  readonly " $data"?: ItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Skill",
  "abstractKey": null
};

(node as any).hash = "8d9299b350c750d64a2b70a8d47242df";

export default node;
