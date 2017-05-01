import React from 'react';
import ReactDOM from 'react-dom';
import MyGraphiQL from './MyGraphiQL';

function graphQLFetcher(graphQLParams) {
  return fetch('window.location.origin'+ '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

ReactDOM.render(
  <MyGraphiQL fetcher={graphQLFetcher} enpoint={'window.location.origin'+ '/graphql'}/>,
  document.body
);