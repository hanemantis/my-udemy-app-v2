const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')
const productRoutes = require('./routes/products')
const app = express()

mongoose.connect(config.DB_URI)
  .then(() => {
    const fakeDb = new FakeDb()
    fakeDb.initDb()
  });

// mongoose.connect(config.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(
//   () => {
//     const FakeDb = new FakeDb()
//     FakeDb.seeDb()
//   }
// )

app.use('/api/v1/products', productRoutes)

// app.get('/products', function(req, res) {
//   res.json({'success': true})
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
  console.log('I am running!')
})
