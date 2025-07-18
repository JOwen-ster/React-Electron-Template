import { app, BrowserWindow } from "electron";
import { join } from "path";
import isDev from "./check-development.js";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({

    });
    if ( isDev() ) {
        mainWindow.loadURL("htpps://localhost:8000")
    } else {
        mainWindow.loadFile(join(app.getAppPath(), "/dist-react/index.html"));
    }
});
