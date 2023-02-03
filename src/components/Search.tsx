import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { MasonryLayout, Spinner } from './index';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import { TPin } from '../types';

interface ISearch {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Search = ({ searchTerm, setSearchTerm }: ISearch) => {
  const [pins, setPins] = useState<Array<TPin>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      const query = searchQuery(searchTerm.toLowerCase());
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [searchTerm]);

  return (
    <div>
      {loading && <Spinner message='Searching for pins..' />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins.length === 0 && searchTerm !== '' && !loading && (
        <div className='mt-10 text-center text-xl'>No Pins Founds!</div>
      )}
    </div>
  );
};

export default Search;
