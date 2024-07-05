import DBLocal from 'db-local'
import crypto from 'crypto'
import bcrypto from 'bcrypt'

const { Schema } = new DBLocal({ path: './DB/created' })

const User = Schema('User', {
  _id: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true }
})

export class UserDB {
  static async create ({ userName, password }) {
    // Validation of userName and password
    Validation.userName(userName)
    Validation.password(password)

    // Validate in the DB if the user already exists
    const existUser = User.findOne({ userName })
    if (existUser) throw new Error('User already exist')

    // Create a random id
    const id = crypto.randomUUID()
    const hashedPassword = await bcrypto.hash(password, 10)

    // Create the user
    User.create({
      _id: id,
      userName,
      password: hashedPassword
    }).save()

    return id
  }

  static async login ({ userName, password }) {
    Validation.userName(userName)
    Validation.password(password)

    const userLogin = User.findOne({ userName })
    if (!userLogin) throw new Error('userName does not exist')

    const isValid = await bcrypto.compare(password, userLogin.password)
    if (!isValid) throw new Error('invalid password')

    const { password: _, ...publicUser } = userLogin

    return publicUser
  }
}

class Validation {
  static userName (userName) {
    if (typeof userName !== 'string') throw new Error('userName must be a string')
    if (userName.length < 3) throw new Error('userName must be at least 3 characters long')
  }

  static password (password) {
    if (typeof password !== 'string') throw new Error('password must be a string')
    if (password.length < 3) throw new Error('password must be at least 3 characters long')
  }
}
