import {
  commitMutation,
  Environment,
  MutationConfig,
  MutationParameters,
} from 'relay-runtime';
import RelayEnvironment from './RelayEnvironment';

export const mutate = <
  TOperation extends MutationParameters = MutationParameters
>(
  config?: MutationConfig<TOperation>,
  environment: Environment = RelayEnvironment,
) => {
  return commitMutation<TOperation>(environment, config);
};
