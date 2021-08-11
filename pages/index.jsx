import React, { useState } from 'react';
import axios from 'axios';
// import { render } from 'react-dom';
// import searchHandler from './api/search';
// import { render } from 'react-dom';


const IndexPage = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  // let url = ['https://content.guardianapis.com/search?']

  const doSearch = async () => {
    const resultSet = await axios.get("/api/search", {
      params: {
        term: term
      }


    })
    setResults(resultSet.data);
    

  }
  // console.log(setResults)
  // console.log(IndexPage)


  return (
    <div style={{backgroundColor: "navy"}}>
      <h1 style={{color: "beige", textAlign: "center", fontFamily: "Sans-Serif"}}>Guardian Search</h1>
      <div style={{textAlign: "center"}}>
        <input

          value={term}
          onChange={(evt) => setTerm(evt.target.value)} />
        <button onClick={() => doSearch(term)}>Search</button>
      </div>
      <div>
        <h2 style={{color: "beige", textAlign: "center", fontFamily: "Sans-Serif"}}>Results</h2>
        <div id="card" style={{padding: "10px 20px", textAlign: "center", color: "pink"}}>
          <div id="container" style={{display: "grid", padding: "10px 20px", textAlign:"center", color: "white", backgroundColor: "beige", }}>
          <ul>
          {results.map(result => {
            return <card style={{margin: "10px", padding: "10px", display: "inline-grid", gridAutoColumns: "200px", gridAutoRows: "200px", direction: "row", border: "solid navy", textAlign: "center"}}>
              <li style={{textAlign: "center", listStyleType: "none", textDecoration: "none"}}>
                <a style={{color: "navy", fontWeight: "bold", fontStyle: "italic", lineHeight: "25px", alignItems: "center", textDecoration: "none", fontSize: "1rem", fontFamily: "Sans-Serif"}} href={result.url}>{result.title}
                </a>
                </li>
                </card>
          })}
        </ul>
        </div>
        </div>
      </div>
    </div>
  )
}


export default IndexPage;