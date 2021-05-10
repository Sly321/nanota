import { Application, RequestHandler } from "express";
import { config } from "dotenv";

enum SecureType {
  ApiKey = "apikey",
}

type Route = {
  path: string;
  handler: RequestHandler;
  secureType: SecureType;
};

export function register(app: Application) {
  app.post("/api/v1/weeklyreads", (req, res, next) => {
    const secret = req.header("secret");
    console.log("secret", { secret, config: config().parsed!.SECRET });
    console.log("body");
    console.log(req.body);

    if (secret !== config().parsed!.secret) {
      return res.sendStatus(403);
    }

    console.log(req);
    console.log("end");
    res.sendStatus(200);
  });
}

export const Routes: Array<Route> = [];
