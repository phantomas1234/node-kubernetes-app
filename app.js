require('http').createServer((req, res) => {
 console.log('New request')
 res.end('Hello Universe ' + require('os').process.env.SECRET_PASSWORD)
}).listen(8000, () => console.log('Listening'))