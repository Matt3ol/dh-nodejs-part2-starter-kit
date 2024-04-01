// // - Write simple Express server that listens on port `3000` (use dotenv to specify the port)
// // - Create a dummy "database" of `planets` using a `let` variable. (You will use this data in further exercises.)
// // - Configure your app (`app.use()`) to:
// //   - accept JSON from the Client
// //   - log the Client's requests

// // ## Use

// // - Dummy database with initial data:
// import express from "express";
// import "express-async-errors";
// import morgan from "morgan";

// const app = express();
// const port = 3000;

// app.use(morgan("dev"));
// app.use(express.json());

// type Planet = {
//   id: number;
//   name: string;
// };

// type Planets = Planet[];

// let planets: Planets = [
//   {
//     id: 1,
//     name: "Earth",
//   },
//   {
//     id: 2,
//     name: "Mars",
//   },
// ];

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });
