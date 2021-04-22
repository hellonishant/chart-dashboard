import { React, useState } from 'react';
import DescriptionCard from './descriptionCards';
import Chart from './chart';
import { Data } from './data';

const BottomTab = ({ category }) => {
  const [isChart, setIsChart] = useState(false);
  console.log(category);
  return isChart ? (
    <Chart setIsChart={setIsChart} />
  ) : (
    Data.map((obj) =>
      obj.category === category ? (
        obj.members.map(({ name, description }) => {
          return (
            <DescriptionCard
              setIsChart={setIsChart}
              name={name}
              description={description}
              key={name}
            />
          );
        })
      ) : (
        <h1>Sorry the data for this user does not exists.</h1>
      ),
    )
  );
};
export default BottomTab;
