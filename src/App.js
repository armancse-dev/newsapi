import logo from './logo.svg';
import './App.css';
import { Button, Spinner, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() =>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-05-24&sortBy=publishedAt&apiKey=37b47d819f7048deabe7280236759725')
    .then(res => res.json())
    .then(data => setNews(data.articles))

  }, [])
  return (
 
    <div className="App">
      <Row xs={1} md={2} className="g-4">
        {
          news.map(nw => <News news={nw}></News>)
        }
      </Row>
    </div>
  );
}

export default App;
