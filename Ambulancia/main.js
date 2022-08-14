'use strict';

const { app, BrowserWindow } = require('electron');


require('electron-reload')(__dirname)


const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences:{
        nodeIntegration: true
      }
      
    })
  
    win.loadFile('public/index.html')

  }


  app.whenReady().then(() => {
    createWindow()
  })