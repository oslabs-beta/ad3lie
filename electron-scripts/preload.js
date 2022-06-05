// Preload (Isolated World)
const { contextBridge, ipcRenderer, dialog } = require('electron')
const { writeFileSync, mkdirSync } = require('fs')
const path = require('path')
console.log('1st dialog', dialog);

contextBridge.exposeInMainWorld(
  'electron',
  {
    writeFileSync,
    mkdirSync,
    path,
    __dirname,
    // dialog
    showSaveDialog: () => ipcRenderer.invoke('show-save-dialog')
  }
)