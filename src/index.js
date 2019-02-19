// import gql from 'graphql-tag';
import { multiply, add10 } from './subIndex';
import { Query1, Query2 } from './query.graphql';

// query is now a GraphQL syntax tree object
console.log(Query1, Query2);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
console.log(multiply(10) + add10(1200));
