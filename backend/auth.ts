import { Request, Response } from 'express'
import { User, users } from './users'

import * as jwt from 'jsonwebtoken'

export const handleAuthentication = (req: Request, res: Response) => {
  const user: User = req.body
  if (isValid(user)) {
    const dbUser = users[user.email]
    const token = jwt.sign({
      sub: dbUser.email,
      iss: 'meat-api'
    }, 'meat-api-password')

    res.json({
      name: dbUser.name,
      email: dbUser.email,
      accessToken: token
    })
  } else {
    res.status(403).json({ message: 'Dados inválidos.' })
  }
}

function isValid(user: User): boolean {
  const dbUser = user ? users[user.email] : undefined
  return dbUser && dbUser.matches(user)
}
