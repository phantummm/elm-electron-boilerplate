const { app, BrowserWindow } = require('electron')

const devMode = process.argv.includes('--dev')
const urlPrefix = devMode ? "http://localhost:8080" : `file://${__dirname}`

let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 500,
    title: "elm-electron-boilerplate",
    show: false
  })

  mainWindow.loadURL(`${urlPrefix}/render.html`)

  if (devMode) mainWindow.webContents.openDevTools({'mode': 'detach'})

  mainWindow.focus()

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
