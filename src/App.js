import React, { Component }from 'react';
import Article from './components/articles'


class App extends Component {
  constructor(props) {
  super(props)
  
  this.state  = {
    posts: [],
    }
  }
fetchData() {
 
  fetch(`http://hn.algolia.com/api/v1/search?query=...`)
    .then(res => res.json())
    .then(data =>
      this.setState({
        posts: data.hits,
    
      })
    )
}

componentDidMount() {
  this.fetchData();
}

render() {
  return ( 
    <div className="main-app">
      {this.state.posts.map((posts) => (
        <div>
          <Article
          title = {posts.title}/>
        </div>
      ))}
      </div>
      )
    }
  }
export default App;

