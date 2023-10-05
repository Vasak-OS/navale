import json
from Vasak.VSKWindow import VSKWindow
from Vasak.VSKIconManager import VSKIconManager
from Vasak.VSKNetworkManager import VSKNetworkManager
from PyQt6.QtCore import pyqtSlot
from PyQt6.QtWidgets import QApplication
from PyQt6.QtWebEngineWidgets import QWebEngineView


class NavaleWindow(VSKWindow):
    def __init__(self):
        super().__init__()
        self.iconsManager = VSKIconManager()
        self.networkManager = VSKNetworkManager()
        self.channel.registerObject("vsk", self)
        self.move_to_screen() # Mover la ventana a una pantalla específica
        self.set_as_dock() # Hacer que la ventana se comporte como un dock
        self.load_html("ui/dist/index.html") # Cargar un HTML en el WebView
        
    
    # Mover la ventana a una pantalla específica
    def move_to_screen(self):
        self.setGeometry(0, 0, QApplication.primaryScreen().availableGeometry().width(), 40)
        self.setScreen(QApplication.primaryScreen())
        self.move(QApplication.primaryScreen().availableGeometry().topLeft())
    
    @pyqtSlot(str, result=str)
    def getGlobalIcon(self, iconName):
        return self.iconsManager.get_icon(iconName)
    
    @pyqtSlot(result=str)
    def getDefaultNetwork(self):
        self.networkManager.updateStatus()
        return json.dumps(self.networkManager.getDefaultConnectionData(), indent=4)