import {buildSchema, graphql} from 'graphql';

const express = require('express');
const schema = buildSchema(`
    type Query {
        hello: String,
        a: Number
    }
`);

const root = {
    hello: () => 'world',
    a: async () => 2
};
const app = express();


graphql(schema, '{ hello, a }', root).then((v: any) => {
    console.log(v);
});
