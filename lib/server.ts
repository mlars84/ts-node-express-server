import app from './app';
const port = process.env.PORT || 4040

app.listen(port, () => {
  console.log(`Server up on ${port}!`)
})