import express from "express";
import axios from "axios";

const app = express();
const port = 3001;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "blackeagle";
const yourPassword = "qwerty";
const yourAPIKey = "786afb9f-b843-4fdd-90ad-acfe53d5f16b";
const yourBearerToken = "7f9ad36f-e3ec-4f66-936b-ff0a2e208178";

// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

//TODO 1: Use axios to hit up the /random endpoint
//The data you get back should be sent to the ejs file as "content"
//Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//TODO 3: Write your code here to hit up the /all endpoint
//Specify that you only want the secrets from page 2
//HINT: This is how you can use axios to do basic auth:
// https://stackoverflow.com/a/74632908

app.get("/basicAuth", async (req, res) => {
try {
  const result = await axios.get(API_URL + "/all?page=2",{
    auth : {
    username : yourUsername,
    password : yourPassword,
    }
  });
res.render("index.ejs", {content: JSON.stringify(result.data)})
} catch (error) {
  res.status(404).send(error.message);
}
});

  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
app.get("/apiKey", async (req, res) => {
  try {
      const result = await axios.get(API_URL + "/filter",{
        params : {
          score : 5,
          apiKey : yourAPIKey,
        },
      });
    res.render("index.ejs",{context:JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

 //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
 //and get the secret with id of 42
 //HINT: This is how you can use axios to do bearer token auth:
 // https://stackoverflow.com/a/52645402
 /*
 axios.get(URL, {
   headers: { 
     Authorization: `Bearer <YOUR TOKEN HERE>` 
  },
 });
  */
const config = {
  headers : {Authorization : `Bearer ${yourBearerToken}`}
};

app.get("/bearerToken", async (req, res) => {
try {
  const result = await axios.get(API_URL + "/secrets/2", config); //targeting url 
  res.render("index.ejs", {content : JSON.stringify(result.data)}); //rendering from it 
} catch (error) {
  res.status(404).send(error.message); // else sending error 
}
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
