import React, { useState } from "react";
import { Suspense } from "react";
import { usePreloadedQuery } from "react-relay";
import { AppRepositoryNameQuery } from "../graphql/query/RepositoryNameQuery";

const A = (props: any) => {
  //   const data = usePreloadedQuery(AppRepositoryNameQuery, props.query);
  const [state, setState] = useState();
  React.useEffect(() => {
    (async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve("22222");
        }, 3000);
      });
      setState(data as any);
    })();
  }, []);
  return <div>{state}</div>;
};

export default (props: any) => {
  return (
    <Suspense fallback={"loading"}>
      <A {...props} />
    </Suspense>
  );
};
