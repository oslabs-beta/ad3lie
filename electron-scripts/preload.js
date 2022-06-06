// Preload (Isolated World)
const { contextBridge, ipcRenderer, dialog } = require('electron');
const { writeFileSync, mkdirSync } = require('fs');
const path = require('path');
console.log('1st dialog', dialog);

contextBridge.exposeInMainWorld('electron', {
  writeFileSync,
  mkdirSync,
  path,
  __dirname,
  // dialog
  //difference between .send and .invoke?
  showSaveDialog: () => ipcRenderer.invoke('show-save-dialog')
});

/* 
DESCRIPTION: This file appears to limit the node methods the Electron app can access.

Per the docs:
  -Main World is the JavaScript context in which the renderer code runs (that is, the page)
  -Isolated World is where preload scripts run
  -contextBridge is a module that safely exposes APIs from the isolated context in which preload scripts run
    to the context in which the website or application runs (i.e., from Isolated World to Main World) 

We likely should not change this file unless we determine additional methods are necessary
or some methods are not used.

*/

// Expose protected methods that allow the renderer process to use select node methods
// without exposing all node functionality. This is a critical security feature
// 'mainWorld" is the context that the main renderer runs in
// with contextIsolation on (see webpreferences on main.js), this preload script runs isolated
// "electron" is the key that injects the api into the window
// to access these keys in the renderer process, we'll do window.electron
// the electron object (second arg) can contain functions, strings, bools, numbers, arrays, obects in value
// data primitives sent on the bridge are immutable and changes in one context won't carry over to another context
