const { app, contextBridge, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, 'electron-scripts', 'preload.js')
    }
  });

  // Uses Webpack Dev Server in Development
  // Must open 
  win.loadURL('http://localhost:8080/index.html');
  // win.loadFile('./dist/index.html');
  // const contents = win.webContents
  // console.log(contents)
};

app.whenReady().then(() => {
  ipcMain.on('hello-world', (event, name) => fs.writeFileSync('hello.json', 'Hello ' + name))
  createWindow();
});

