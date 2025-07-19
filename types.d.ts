type CustomMessage = {
    message: string,

};

type CustomVersions = {
    node_version: string,
    chrome_version: string,
    electron_version: string,
    
};

// Window already exists as an interface in electron
// redefining it adds the attributes to the existing defined interface
interface Window {
    versions: CustomVersions,
    message: {
        getMessage(): CustomMessage;
    },

};
