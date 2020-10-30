const express = require('express')
const axios = require('axios')
const app = express()
const request = require('request')
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello clem!')
})

app.get('/weather', (req, res) => {
  request('http://api.weatherapi.com/v1/current.json?key=2d745fd742ef4c76ad6140806203010&q=Paris', function (error, response, body) {
      if (!error && response.statusCode == 200) {
         let parsedBody = JSON.parse(body)
         let temp_c = parsedBody["current"]["temp_c"]
         res.send({temp_c})
      }
  })
})





app.listen(port, () => {
  console.log(`Weather app listening at http://localhost:${port}`)
})