import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";
import {
  loadQuery,
  RelayEnvironmentProvider,
} from "react-relay";
import RelayEnvironment from "../gqlHelpers/RelayEnvironment";

import { AppRepositoryNameQuery } from "../graphql/query/RepositoryNameQuery";

const query = loadQuery(RelayEnvironment, AppRepositoryNameQuery, {});
const Test = dynamic(() => import("./Test"), { ssr: false });

const App = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      {/* <Suspense fallback={'loading'}> */}
        <Test query={query}></Test>
      {/* </Suspense> */}
    </RelayEnvironmentProvider>
  );
};

export default App;
