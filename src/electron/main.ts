import { app, BrowserWindow } from "electron";
import { join } from "path";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        
    });
    mainWindow.removeMenu(); // Linux and Windows top menu bar
    if ( process.env.NODE_ENV == 'development' ) {
        mainWindow.loadURL("http://localhost:8000"); // use vite server for HMR
    } else {
        mainWindow.loadFile(join(app.getAppPath(), "/dist-react/index.html")); // use files from SSG
    }
});

app.on('window-all-closed', () => {
    app.quit();
});
