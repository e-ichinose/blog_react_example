import { useQuery } from 'react-query';

import { axios } from '../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../lib/react-query';

import { Article } from '../../common/type';
export const getArticles = (): Promise<Article[]> => {
  return axios.get(`/api/article`);
};

type QueryFnType = typeof getArticles;

type UseArticlesOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useArticles = ({ config }: UseArticlesOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['articles'],
    queryFn: () => getArticles(),
  });
};
