import express from 'express'
import { PORT, SECRET_JWT_KEY } from './config.js'
import { UserDB } from './DB/user.js'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(cookieParser())

app.set('view engine', 'ejs')

app.use(express.json())

app.use((req, res, next) => {
  const token = req.cookies.access_token
  req.session = { user: null }

  try {
    const data = jwt.verify(token, SECRET_JWT_KEY)
    req.session.user = data
  } catch (error) { }

  next()
})

app.get('/', (req, res) => {
  const { user } = req.session

  res.render('index', user)
})

app.post('/login', async (req, res) => {
  const { userName, password } = req.body

  try {
    const user = await UserDB.login({ userName, password })
    const token = jwt.sign({ id: user._id, userName: user.userName }, SECRET_JWT_KEY, {
      expiresIn: '1h'
    })

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60
    }).send(user)
  } catch (error) {
    res.status(401).send(error.message)
  }
})

app.post('/register', async (req, res) => {
  const { userName, password } = req.body

  console.log(userName, password)

  try {
    const id = await UserDB.create({ userName, password })
    res.send(id)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.post('/logout', (req, res) => {
  res.clearCookie('access_token').redirect('/')
})

app.post('/protected', (req, res) => {
  const { user } = req.session

  if (!user) return res.status(401).send('Unauthorized')

  res.render('protected', user)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
