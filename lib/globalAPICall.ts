import { NextApiRequest, NextApiResponse } from "next";

export class HTTPError extends Error {
  constructor(message: string, public readonly code: number) {
    super(message);
  }
}

export default async function globalAPICall(
  req: NextApiRequest,
  res: NextApiResponse,
  actions: Record<string, () => Promise<void>>,
) {
  try {
    const method = req.method;
    if (method === undefined || !Object.keys(actions).includes(method)) {
      console.log(`HTTP method ${method} not allowed`);
      throw new HTTPError("Method not allowed", 405);
    }
    await actions[method]();
  } catch (err) {
    if (err instanceof HTTPError) {
      res.status(err.code).send(err.message);
    } else {
      res.status(500).send("Internal server error");
    }
  }
}
