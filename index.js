const express = require('express')
const multer = require('multer')
const cors = require('cors')
const path = require('path')
const app = express()
const upload = multer()

app.use(cors({ optionSuccessStatus: 200 }))

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', {root: __dirname})
})

app.post('/', upload.single('upfile'), (req, res) => {
  console.log(req.file)
  return res.json({
    'name': req.file.originalname,
    'type': req.file.mimetype,
    'size': req.file.size
  })
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`listening on port ${process.env.PORT || 3001}`)
})
