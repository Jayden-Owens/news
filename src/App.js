import React, {useState, useEffect} from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
import './App.css'
import axios from "axios"

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b95173f944324e94b9022e8d7ec646eb`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
}, [category])
  console.log(items)

  return (
    <div className="App">
      <h1 className="title">See The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <NewsGrid items={items}/>
    </div>
  )
}

export default App;