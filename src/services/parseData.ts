import { SearchResultProps, SearchResultsData } from '../@types/types';

export const parseResults = (data: SearchResultsData): Array<SearchResultProps> => (data?.results ? data.results : []);
