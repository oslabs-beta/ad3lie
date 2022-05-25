const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  // Uses Webpack Dev Server in Development
  win.loadURL('http://localhost:8080/index.html')
  // win.loadFile('./dist/index.html');
}

app.whenReady().then(() => {
  createWindow()
})