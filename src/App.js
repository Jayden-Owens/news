import React, {useState, useEffect} from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
import './App.css'
import axios from "axios"

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("top")

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=pub_1305656f1432b5c72581bf4f1f44200bc1f32&&country=us&category=${category}`)
    .then(res => res.json())
    .then(data => setItems(data.results))
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