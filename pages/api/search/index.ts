import { NextApiRequest, NextApiResponse } from 'next';
import methods from "micro-method-router"
import { count } from 'console';

export default methods({
  async get(req: NextApiRequest, res:NextApiResponse) {

    let querys = ""   
    const queryObject = req.query

    for (const key in queryObject){
      const string = queryObject[key] as string
      querys = querys.concat(" ", string)
    }
    
    res.status(200).send("Soy el Get Search y las querys son" + querys )
  }
})