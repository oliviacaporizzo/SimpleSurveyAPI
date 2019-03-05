# SimpleSurveyAPI

To install dependencies: npm install  
To run: npm start  

Swagger UI Docs can be found at localhost:8080/docs after running.  

## Routes

I used swagger for clear documentation, but I will also breifly explain the routes here as well.  
**Base url: localhost:8080/simpleSurvey**  

### /create  
#### POST:  
This route is used to store a new survey. The request body should be an JSON object with the following properties: name - a string that represents the name/title of the survey, questions - an object where each key the question number (ie. 1,2,3) and the key is an object with the property text - a string that represents the actual question. When a survey was successfully created 201 HTTP status code is sent back as well as an object that has the property id and the key is a unique id that was assigned to the survey when it was created. This way there can be multiple surveys with the same name but each have a unique id. This id will be used to access the survey in other requests. If the survey was not created the response will be 500 error code generic error.

### /results
#### GET:  
This route is used to get all of the results for all of the surveys. The response body will be an array of objects. Each object will have the following properties: name - a string representing name/title of the survey, quesionts - an objeft where each key is a number to represent the number of the question, and each corresponding value is an object containing text - the question itself and answers - an array of 1/0 integers representing the number of yes/no answers to that specific question. If there were no surveys created yet then the response will be 404 - not found, if there is an error getting the surverys then the response will be generic 500 error code.

### /results/{surveyID}  
#### GET:  
This route gets the results for a specific survey based on the unique ID of that survey, which is provided in the path of the route. This will return one survey object with the same properties of each array object that is returned in /GET /results. If there was no survey found with the provided ID then the response will be 404 - not found, if there is an error getting the survery then the response will be generic 500 error code.


### /submit/{suveryID}
#### POST:  
This route is used to submit answers to a survey. The survey ID that these answers are associated with are passed as a path parameter. The request body should be an object where each key is a number that references the number question, and the key is 1/0 integer that represents a yes/no response to that question. Then these answers are added to the appropiate survey and question in storage. If there was no survey found with the provided ID then the response will be 404 - not found, if there is an error saving the answers for the survey then the response will be generic 500 error code.

### /take/{surveyID}  
#### GET:  
This route is used to get the question text for a particular survey as specified by its unique id in a path parameter. The response body will be an object where each key is a number representing what number question it is, and the value will be the the string representation of the actual question. If there was no survey found with the provided ID then the response will be 404 - not found, if there is an error getting the questions for the specified survery then the response will be generic 500 error code.

Please look at the swagger UI docs for examples of request and response bodies.  

## Technologies  
For this project I wrote the API in NodeJS. I used the Swagger 2.0 framework because it keeps the code organized and creates nice documenation. I used Winston for logging purposes in the console. To persist data I used node-cache a third party library that will persist data while the service is running. node cache is relative light weight and you can store things as objects that do not need a defined schema. Each object is stored with by its unique key (the survey id). Finally I also used the uuid library to generate random unique ids for each survey upon creation.   

## External Data Persistance  
For a production ready API I would have chosen a database like MongoDB. MongoDB is easy to use because its documents are not bound to a schema - a collection can hold many documents that can vary in structure, this would be important for my application since I am updateing the question property - sometimes a question just has text and no answers if no one has taken that survey yet, also the number of answers for each question will change depending on how many people take the survey. MongoDB also allows the ability for deep querying inside objects, which would be useful for this scenario since a survey object has many nested components. MongoDB also has good performance because while it persists all the data in the hard dist, it also stores most of recent data in RAM, thus for queries it does not have to fetch from the hard disk often. MongoDB is also easily scalable. Finally MongoDB integrates easily with node because of the node driver Mongoose. 
