import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql'

let count = 0

const CounterType = new GraphQLObjectType({
  name: 'Counter',
  description: 'A simple counter',
  fields: () => ({
    count: {
      type: GraphQLInt,
      description: 'The current counter value',
    },
  }),
})

const counterQuery = {
  type: CounterType,
  resolve: () => ({ count }),
}

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      counter: counterQuery,
    }),
  }),
})
