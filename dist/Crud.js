// # NodeJS Part 2 :: Exercise 2 :: CRUD with dummy database
// ## Do
// - Write a router with the following routes:
//   - `GET /api/planets`: return all planets (JSON) with `200`
//   - `GET /api/planets/:id`: return a planet (JSON) by id with `200`
//   - `POST /api/planets`: create a planet, return only `201` code and a success JSON with key `msg`
//     - Make sure every planet is created with `id` and `name`.
//   - `PUT /api/planets/:id`: update a planet by id, return only `200` code and a success JSON with key `msg`
//   - `DELETE /api/planets/:id`: delete a planet by id, return only `200` code and a success JSON with key `msg`
// - Validate planet fields where appropriate.
// ## Use
// - The dummy database of planets from the previous exercise.
// - `joi` library for validation.
// ## Check
// - Use Postman to test the routes.
// - Paths `POST` and `PUT` should receive data in JSON format (`req.body`).
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import Joi from "joi";
const app = express();
const port = 3000;
const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    id: Joi.number(),
});
schema.validate({ id: 1, name: "Earth" });
schema.validate({ id: 2, name: "Mars" });
app.use(morgan("dev"));
app.use(express.json());
let planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];
app.get("/api/planets", (req, res) => {
    res.status(200).json(planets);
});
app.get("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id));
    res.status(200).json(planet);
});
app.post("/api/planets", (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name };
    planets = [...planets, newPlanet];
    console.log(planets);
    res.status(201).json({ msg: "Planet created" });
});
app.put("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map((p) => (p.id === Number(id) ? Object.assign(Object.assign({}, p), { name }) : p));
    console.log(planets);
    res.status(200).json({ msg: "The planet was updated !" });
});
app.delete("/api/planet/:id", (req, res) => {
    const { id } = req.params;
    planets = planets.filter((p) => p.id !== Number(id));
    res.status(200).json({ msg: "The planet was deleted" });
});
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
