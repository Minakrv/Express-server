const express = require("express");
const hbs = require("express-handlebars");
const getPerson = require("./lib/person");
const getPeople = require('./lib/people');
const path = require ('path');
const { dirname } = require("path");
const app = express();
const getPlaceholder = require('./lib/getplaceholder');

app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs',
  
}));

app.set('view engine', '.hbs');

app.get("/", async(req, res) => {
  let people =await getPlaceholder();
  console.log(people);
  res.render('index', {people, listExists: true});
});

app.get("/about", (req, res) => {
  res.status(200).render('about');
});

app.get("*", (req, res) => {
  res.status(404).render('404');
})

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
