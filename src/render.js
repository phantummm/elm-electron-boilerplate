require('./render.html')
const Elm = require('./elm/Main.elm')

const container = document.getElementById('container')
const app = Elm.Main.embed(container)
