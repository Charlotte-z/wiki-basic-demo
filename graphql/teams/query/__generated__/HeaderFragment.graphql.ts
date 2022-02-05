/**
 * @generated SignedSource<<0179f0a756a5fde5edad3e4ad45dde45>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "HeaderFragment";
};
export type HeaderFragment = HeaderFragment$data;
export type HeaderFragment$key = {
  readonly " $data"?: HeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "ReactTeam",
  "abstractKey": null
};

(node as any).hash = "6f6423fb6020f4f54cdc686827a33f94";

export default node;
