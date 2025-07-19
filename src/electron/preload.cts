const electron_instance = require('electron');

// Define many preload objects
const app_versions = {
    node_version: process.versions.node,
    chrome_version: process.versions.chrome,
    electron_version:  process.versions.electron,
    
} satisfies Window['versions'];

// This is not a preload object, but its to avoid typescript error and good practice
// Refer to preload.cts
const getMessage = (): CustomMessage => {
    return {
        message: "hello",
    };
};

// preload object
const app_api = {
    getMessage,
} satisfies Window['message'];

// define multiple context bridges for each seperate preload object

//window.versions
electron_instance.contextBridge.exposeInMainWorld('versions', app_versions);

//window.api
electron_instance.contextBridge.exposeInMainWorld('message', app_api);
