const {contextBridge, ipcRenderer} = require("electron")

contextBridge.exposeInMainWorld("electron", {
    Fechar: function(){
        ipcRenderer.send("Fechar")
    },
    Minimizar: function(){
        ipcRenderer.send("Minimizar")
    },
    Maximizar: function(){
        ipcRenderer.send("Maximizar")
    }
})