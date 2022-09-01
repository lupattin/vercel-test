import { NextApiRequest, NextApiResponse } from 'next';
import methods from "micro-method-router"

export default methods({
  async get(req: NextApiRequest, res:NextApiResponse) {
    res.status(200).send("Soy el Get Products ID = " + req.query.id)
  }
})