import React from 'react';
import ReactDOM from 'react-dom';
import MyGraphiQL from './MyGraphiQL';

function graphQLFetcher(graphQLParams) {
  return fetch('http://localhost:8080/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

ReactDOM.render(
  <MyGraphiQL fetcher={graphQLFetcher} enpoint={`http://localhost:8080/graphql`}/>,
  document.body
);