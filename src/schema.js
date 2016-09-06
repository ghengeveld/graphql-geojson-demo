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

const IncrementType = new GraphQLObjectType({
  name: 'Increment',
  fields: () => ({
    count: {
      type: GraphQLInt,
      description: 'The new counter value',
    },
  }),
})

const counterQuery = {
  type: CounterType,
  resolve: () => ({ count }),
}

const incrementMutation = {
  type: IncrementType,
  resolve: () => {
    count += 1
    return { count }
  },
}

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      counter: counterQuery,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      increment: incrementMutation,
    }),
  }),
})
