import TilesCard from '@/Components/TilesCard';
import React from 'react';
import { getTiles } from '../lib/data';

const AllTilesPage =async () => {
  const tilesData = await getTiles()
  return (
    <div className='container mx-auto '>
      <h2 className='text-3xl font-bold my-3'>All Tiles </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5 p-3'>
        {
          tilesData.map(data => <TilesCard key={data.id} data={data}></TilesCard>)
        }
      </div>
    </div>
  );
};

export default AllTilesPage;