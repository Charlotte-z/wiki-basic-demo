import { useState } from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';

import { AppTeamsQuery } from '@/graphql/teams/query/TeamsQuery';
import type { TeamsQuery } from '@/graphql/teams/query/__generated__/TeamsQuery.graphql';

import Todo from '../_components/Todo';

type TeamsProps = {
  preloadedQuery: PreloadedQuery<TeamsQuery, {}>;
};

const Teams = (props: TeamsProps) => {
  const data = usePreloadedQuery<TeamsQuery>(
    AppTeamsQuery,
    props.preloadedQuery,
  );

  const [member, setMember] = useState<string>(void 0);

  const chooseMember = (memberName: string) => setMember(memberName);

  const obtainMember = (memberName) => {
    const foundMember = data?.Teams?.find((team) => team.name === memberName);
    return <Todo queryRef={foundMember} />;
  };

  return (
    <div className='w-full'>
      {member ? (
        obtainMember(member)
      ) : (
        <>
          <h2>please choose member of team</h2>
          {data?.Teams?.map((teamRef) => (
            <div
              className='w-fit text-red-400 cursor-pointer'
              key={teamRef.id}
              onClick={() => chooseMember(teamRef.name)}>
              {teamRef.name}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Teams;
