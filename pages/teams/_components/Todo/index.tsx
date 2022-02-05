import { useState } from 'react';
import { useFragment } from 'react-relay';

import { AppTeamsFragment } from '@/graphql/teams/query/TeamsFragment';
import { TeamsFragment$key } from '@/graphql/teams/query/__generated__/TeamsFragment.graphql';

import Item from '../Item';
import Header from '../Header';

type TodoProps = {
  queryRef: TeamsFragment$key;
};

const Todo = (props: TodoProps) => {
  const data = useFragment<TeamsFragment$key>(AppTeamsFragment, props.queryRef);
  const [pointer, setPointer] = useState(-1);

  return (
    <div className='w-full'>
      <Header queryRef={props.queryRef} />
      <h1 className='text-pink-400 flex-inline justify-center min-h-min-48 w-full'>
        Member of geek team: {data?.name ?? ''} !
        <div>
          {data?.skills
            ?.filter((skill) => skill) // it's not grace to filter null values
            .map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setPointer(index)}
                className='hover:bg-pink-200 rounded-md flex justify-items-center'>
                <Item
                  queryRef={skill}
                  member={data.name}
                  memberId={data.id}
                  hoverNow={index === pointer}
                />
              </div>
            ))}
        </div>
      </h1>
    </div>
  );
};

export default Todo;
