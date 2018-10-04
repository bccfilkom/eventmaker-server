const typeDefs = `
scalar Date

type Account {
  nim: String!
  name: String!
  email: String!
}

type Event {
  id: ID!
  name: String!
  description: String!
  time: Date!
  regTime: Date!
  place: String!
  createdBy: Account!
}

type Query {
  # return OK
  health: String
  account(nim: ID!): Account
  events: [Event!]!
  event(id: ID!): Event
}
`;

module.exports = typeDefs;
