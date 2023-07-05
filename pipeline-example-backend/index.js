const Express = require("express");
const cors = require("cors");

const App = Express();

App.use(cors());

App.get("/", (req, res) => {
  res.send('teste');
});

App.listen(5555, () => {
  console.log("Application started on port 5555");
});