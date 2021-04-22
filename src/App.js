import { React, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import ScrollingCards from './scrollingCards';
import BottomTab from './BottomTab';
import { useReadCypher, useWriteCypher } from 'use-neo4j';

function App() {
  const {
    loading,
    error,
    records,
  } = useReadCypher(`match (n:User)-[r]->(m)  Where r.timestamps is not NULL Unwind r.timestamps as Data WITH n,m,date(datetime({epochmillis:apoc.date.parse(Data, "ms", "MMMMM dd, yyyy h:mm a")})) as Date
  Where Date=date("2021-04-06") return Date,n.username, count(m)`);
  loading ? console.log(`Loading...`) : console.log('done');
  if (error) console.log(error);

  const data = records?.map((record) => {
    const name = record.get('n.username');
    const date = record.get('Date');
    const count = record.get('count(m)');
    return { name, date, count };
  });

  console.log(data);

  const [category, setCategory] = useState('server-administration');
  return (
    <Container>
      <ScrollingCards setCategory={setCategory} />
      <BottomTab category={category} />
    </Container>
  );
}

export default App;
