// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    helloWorld: (name) => ipcRenderer.send('hello-world', name)
  }
)