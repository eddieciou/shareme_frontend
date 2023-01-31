import React, { Dispatch, SetStateAction } from 'react';

interface ISearch {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Search = ({ searchTerm, setSearchTerm }: ISearch) => {
  return <div>Search</div>;
};

export default Search;
