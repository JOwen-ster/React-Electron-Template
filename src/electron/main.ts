import { app, BrowserWindow } from "electron";
import { join } from "path";
import isDev from "./checkDevelopment.js";
import getPreload from "./getPreloadScript.js";

app.on("ready", () => {
    const mainWindow: BrowserWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreload(),
        },
    });
    // mainWindow.removeMenu(); // Linux and Windows top menu bar
    if ( isDev() ) {
        mainWindow.loadURL("http://localhost:8000"); // use vite server for HMR
    } else {
        mainWindow.loadFile(join(app.getAppPath(), "/dist-react/index.html")); // use files from SSG
    }
});

app.on('window-all-closed', () => {
    app.quit();
});
