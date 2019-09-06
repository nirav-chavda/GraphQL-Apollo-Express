const defaultData = [{
        id: 1,
        name: 'Luke SkyWaler',
        gender: 'male',
        homeworld: 'Tattoine'
    },
    {
        id: 2,
        name: 'C-3PO',
        gender: 'bot',
        homeworld: 'Tattoine'
    }
];

/*
Resolvers are functions that contain the logic behind a query or mutation. 
They are used then to retrieve data and return it on the relevant request.
*/
const resolvers = {
    Query: {
        allPeople: () => {
            return defaultData;
        },
        person: (root, {
            id
        }) => {
            return defaultData.filter(character => {
                return (character.id = id);
            })[0];
        }
    }
};

/*
First, we define the defaultData array which contains details of two characters from Star Wars. 
Both of these objects inside the array have four properties as per our schema. 
Next is our resolvers object which contains two functions. 
allPeople() here can be used later to retrieve all the data inside thedefaultData array. 
The person() arrow function, uses an argument id to retrieve the person object with the requested ID.
 This we have already defined in our query.
*/

export default resolvers;