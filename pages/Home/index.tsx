import type { PreloadedQuery } from "react-relay";
import {usePreloadedQuery} from 'react-relay'
import { OperationType } from "relay-runtime";
import { AppRepositoryNameQuery } from "../../graphql/query/RepositoryNameQuery";

const Home = (props: { query: PreloadedQuery<OperationType, {}> }) => {
  
  

  return (
    // <Suspense fallback={"Loading..."}>
        <div>123</div>
    // </Suspense>
  );
};

export default Home;
