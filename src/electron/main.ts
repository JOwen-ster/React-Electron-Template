import {app, BrowserWindow} from "electron";
import { join } from "path";

app.on("ready", () => {
    const mainWidow = new BrowserWindow({
        
    });
    mainWidow.loadFile(join(app.getAppPath(), "/dist-react/index.html"));
});

