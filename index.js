import { app, BrowserWindow, Menu } from "electron";

const createWindow = () => {
    const win = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadURL("https://emotions-web.pages.dev/");
};

Menu.setApplicationMenu(null);
app.whenReady().then(createWindow);
