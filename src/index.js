const {app, BrowserWindow, ipcMain} = require("electron")

const {join} = require("path")


app.whenReady()
    .then(() => {
        const janela = new BrowserWindow({
            frame: false,
            height: 500,
            width: 720,
            icon: join(__dirname, "/public/icon.png"),
            webPreferences: {
                preload: join(__dirname, "preload.js")
            }
        })

        janela.loadFile("./public/inicio.html")

        ipcMain.on("Fechar", function() {
            app.quit()
        })
        ipcMain.on("Minimizar", function() {
            janela.minimize()
        })
        ipcMain.on("Maximizar", function() {
            janela.isMaximized() ? janela.unmaximize() : janela.maximize()
        })
    })
