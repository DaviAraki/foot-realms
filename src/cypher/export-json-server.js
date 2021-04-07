import express, { json } from "express";
import { ALL_CARD_TYPES } from "../aiye-cards";
import neo4j from "neo4j-driver";

const uri = "bolt://localhost:7687";
const user = "neo4j";
const password = "senha123";

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

const app = express();

app.use(json());

app.get("/questions", async (req, res) => {
  const session = driver.session();
  res.type("html");
  res.write("<style> td,th { border: 1px solid grey;}</style> <body>");
  try {
    for (const q of QUESTIONS) {
      res.write(`<dt>${q.question}</dt>`);
      await q.query(req, res, session);
    }
  } finally {
    await session.close();
    res.end();
  }
});

const QUESTIONS = [
  {
    question: `When the cards where bought?`,
    query: async (req, res, session) => {
      const result = await session.run(
        `MATCH (c:Card)-[r:Was_Bought]->(t:Turn)
        WHERE t.Number ='5'
        return c, t, r`,
        {}
      );

    },
  },
  {
    question: `When the cards where selected?`,
    query: async (req, res, session) => {
      const result = await session.run(
        `MATCH (c:Card)-[r:Was_Selected]->(t:Turn)
        WHERE t.Number ='4'
        return c, t, r`,
        {}
      );
    },
  },
];

const server = app.listen(3100, () => {
  console.log("listening on http://localhost:3100");
});
process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
  console.log("Closing http server.");
  server.close(async () => {
    console.log("Closing driver.");
    await driver.close();
    console.log("Http server closed.");
  });
});
