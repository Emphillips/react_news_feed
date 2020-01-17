import React, {Component} from 'react'; 
import { pseudoRandomBytes } from 'crypto';

const Article = ({title}) => {

  return (
    <div className= 'article'>
    <h2>Author</h2>
    <p><span className="sub-text">{title.title}</span>
    </p>
    </div>
  )
}


export default Article;