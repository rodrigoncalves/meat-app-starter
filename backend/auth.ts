import { Request, Response } from 'express'
import { User, users } from './users'

export const handleAuthentication = (req: Request, res: Response) => {
  const user: User = req.body
  if (isValid(user)) {
    const dbUser = users[user.email]
    res.json({
      name: dbUser.name,
      email: dbUser.email
    })
  } else {
    res.status(403).json({ message: 'Dados inválidos.' })
  }
}

function isValid(user: User): boolean {
  const dbUser = user ? users[user.email] : undefined
  return dbUser && dbUser.matches(user)
}
