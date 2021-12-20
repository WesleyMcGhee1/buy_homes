const express = require("express");
const app = express();
const cors = require("cors");
const port = 4500;
const ctrl = require("./controller");

app.use(express.json());
app.use(cors());

app.get("/homes", ctrl.getHouses);
app.get("/homes/:id", ctrl.getHouse);
app.post("/homes", ctrl.addHouse);
app.put("/homes/:id", ctrl.updateHouse);
app.delete("/homes/:id", ctrl.deleteHouse);

app.listen(port, () => console.log(`Server is running on ${port}...`));
