// import { Request, Response } from "express";
// import Joi from "joi";
// import pgPromise from "pg-promise";

// const db = pgPromise()("postgres://postgres:postgres@localhost:5432/planetsDB");

// const setupDb = async () => {
//   await db.none(`

//   DROP TABLE IF EXISTS planets;

//     CREATE TABLE planets (
//       id SERIAL NOT NULL PRIMARY KEY,
//       name TEXT NOT NULL
//     );
//   `);

//   await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
//   await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
//   await db.none(`INSERT INTO planets (name) VALUES ('Jupiter')`);
// };

// setupDb();

// const getAll = async (req: Request, res: Response) => {
//   const planets = await db.many(`SELECT * FROM planets;`);
//   console.log(planets);

//   res.status(200).json(planets);
// };

// const getOneById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const planet = await db.oneOrNone(
//     `SELECT * FROM planets WHERE id=$1;`,
//     Number(id)
//   );
//   res.status(200).json(planet);
// };

// const planetSchema = Joi.object({
//   // id: Joi.number().required(),
//   name: Joi.string().required(),
// });

// const create = async (req: Request, res: Response) => {
//   const { name } = req.body;
//   const newPlanet = { name };
//   const validateNewPlanet = planetSchema.validate(newPlanet);

//   if (validateNewPlanet.error) {
//     return res
//       .status(400)
//       .json({ msg: validateNewPlanet.error.details[0].message });
//   } else {
//     try {
//       await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);
//       res.status(201).json({ msg: "the planet was created" });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
// };

// const updateById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { name } = req.body;

//   await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);

//   res.status(200).json({ msg: "the planet was updated" });
// };
// const deleteById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   await db.none("DELETE FROM planets WHERE id=$1", Number(id));
//   res.status(200).json({ msg: "the planet was deleted" });
// };

// export { getAll, getOneById, create, updateById, deleteById };
