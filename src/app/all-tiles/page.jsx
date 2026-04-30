import TilesCard from '@/Components/TilesCard';
import React from 'react';

const AllTilesPage =async () => {
  const res = await fetch('https://tiles-api-server-yz1c.vercel.app/data.json')
  const tilesData = await res.json()
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