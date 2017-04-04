const electron = require('electron');

const {app} = electron;

const {BrowserWindow} = electron;

app.on("ready", () => {
    let mainWindow = new BrowserWindow({
        width: 1500,
        height: 800
    });

    //mainWindow.loadURL(`file://${__dirname}/../build/index.html`);
    mainWindow.loadURL(`http://localhost:8080/`);

    //mainWindow.webContents.openDevTools();
});
