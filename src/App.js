import React, { Component }from 'react';
import Article from './components/articles'


class App extends Component {
  constructor(props) {
  super(props)
  
  this.state  = {
    posts: [],
    value: ''
  }
  
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
fetchData() {
 
  fetch(`http://hn.algolia.com/api/v1/search?tags=author_panny`)
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
handleSubmit(event) {
  alert('Submitted: ' + this.state.value);
  event.preventDefault();
}
handleChange(event) {
  this.setState({value: event.target.value});
  console.log(event.target.value)
}
render() {
  return ( 
    <div className="main-app">
    <form onSubmit={this.handleSubmit}>
    <label><br></br>
       News Search
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
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

