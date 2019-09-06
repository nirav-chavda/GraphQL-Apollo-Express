import express from 'express';
import {
    ApolloServer,
} from 'apollo-server-express';

import typeDefs from './api/schema';
import resolvers from './api/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

server.applyMiddleware({
    app
});

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
    console.log(`Magic Happens at http://localhost:${PORT}${server.graphqlPath}`);
    // This will open this url into browser
    require('opn')(`http://localhost:${PORT}${server.graphqlPath}`, {
        app: 'chrome'
    });
});

/*
Example:
=> Query

{
    allPeople {
        id
        name
        gender
    }
  
	person(id: 1) {
		name
		homeworld
	} 
}

=> Data

{
  "data": {
    "allPeople": [
      {
        "id": 1,
        "name": "Luke SkyWaler",
        "gender": "male"
      },
      {
        "id": 2,
        "name": "C-3PO",
        "gender": "bot"
      }
    ],
    "person": {
      "name": "Luke SkyWaler",
      "homeworld": "Tattoine"
    }
  }
}

*/