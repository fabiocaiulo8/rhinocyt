'use strict'
const port = process.env.PORT || 8080

// Firebase Settings
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const database = admin.firestore()
const bucket = admin.storage().bucket('gs://rhinocyt-cloud.appspot.com')

const Slide = database.collection('Slides')

// Express Settings
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json({ limit: '1gb' }))
app.use(cors())
app.use(express.static(__dirname + '/dist/rhinocyt'))

// Files Settings
const getRawBody = require('raw-body')
const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

// Multer Settings
global.XMLHttpRequest = require('xhr2')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

// POST: Upload Slide API
app.post('/api/slides/upload', upload.single('image'), async (req, res) => {
  try {
    const image = req.file
    const destination = 'slides/' + image.filename
    await bucket.upload(image.path, { destination: destination })
    await unlinkAsync(image.path)
    await Slide.add({
      visible: true,
      date: new Date().toDateString() + ' ' + new Date().toTimeString(),
      image: bucket.file(destination).publicUrl(),
      annotations: []
    })
    res.status(200).send({ msg: 'Uploaded' })
  } catch(error) {
    console.log('Upload Slide API: ' + error.message)
    res.status(400).send({ msg: 'Error' })
  }
})

// DELETE: Remove Slide API
app.delete('/api/slides/remove', async (req, res) => {
  try {
    const image = 'slides/' + req.query.id
    const url = 'https://storage.googleapis.com/rhinocyt-cloud.appspot.com/slides%2F' + req.query.id
    const slide = await Slide.where('image', '==', url).get()
    slide.docs.map((doc) => (Slide.doc(doc.id).delete()))
    await bucket.file(image).delete()
    res.status(200).send({ msg: 'Removed' })
  } catch(error) {
    console.log('Remove Slide API: ' + error.message)
    res.status(400).send({ msg: 'Error' })
  }
})

// GET: Read Slides API
app.get('/api/slides/read', async (req, res) => {
  try {
    const snapshot = await Slide.where('visible', '==', true).orderBy('date', 'desc').get()
    res.status(200).send(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  } catch(error) {
    console.log('Read Slides API: ' + error.message)
    res.status(400).send({ msg: 'Error' })
  }
})

// POST: Hide Slide API
app.post('/api/slides/hide', async (req, res) => {
  try {
    const id = req.query.id
    await Slide.doc(id).update({ visible: false })
    res.status(200).send({ msg: 'Hidden' })
  } catch(error) {
    console.log('Hide Slide API: ' + error.message)
    res.status(400).send({ msg: 'Error' })
  }
})

// GET: Read Slide API
app.get('/api/slides/read/:id', async (req, res) => {
  try {
    const id = req.params.id
    const slide = await Slide.doc(id).get()
    res.status(200).send({ id: slide.id, ...slide.data() })
  } catch(error) {
    console.log('Read Slide API: ' + error.message)
    res.status(400).send({ msg: 'Error' })
  }
})

// PUT: Annotations Slide API
app.put('/api/slides/annotations', async (req, res) => {
  try {
    const id = req.query.id
    const annotations = req.body
    await Slide.doc(id).update({
      annotations: annotations,
      date: new Date().toDateString() + ' ' + new Date().toTimeString()
    })
    res.status(200).send({ msg: 'Saved' })
  } catch(error) {
    console.log('Annotations Slide API: ' + error.message)
    res.status(400).send({ msg: 'Error' })
  }
})

// PUT: Save Model API
app.put('/api/slides/models/save', async (req, res) => {
  try {
    const name = req.query.name
    const destination = 'models/' + name + '.json'
    const dataset = req.body
    await bucket.file(destination).save(JSON.stringify(dataset))
    res.status(200).send({ msg: 'Uploaded' })
  } catch(error) {
    console.log('Save Model API: ' + error.message)
    res.status(400).send({ msg: 'Error' })
  }
})

// GET: Load Model API
app.get('/api/slides/models/load/:name', async (req, res) => {
  try {
    const name = req.params.name
    const file = 'models/' + name + '.json'
    const destination = 'files/' + name + '.json'
    bucket.file(file).exists(async function(err, exists) {
      if(err) throw err
      if(exists) res.status(200).send({ name: name, dataset: JSON.parse(await getRawBody(bucket.file(file).createReadStream())) })
      else res.status(200).send({ name: name, dataset: undefined })
    })
  } catch(error) {
    console.log('Load Model API: ' + error.message)
    res.status(400).send({ msg: 'Error' })
  }
})

app.listen(port)
