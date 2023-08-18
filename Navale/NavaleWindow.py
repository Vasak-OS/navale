import os
from Vasak.VSKWindow import VSKWindow
from PyQt6.QtCore import QUrl, Qt
from PyQt6.QtGui import QSessionManager
from PyQt6.QtWidgets import QApplication, QMainWindow
from PyQt6.QtWebEngineWidgets import QWebEngineView


class NavaleWindow(VSKWindow):
    def __init__(self, screen_num=0):
        super().__init__()
        self.move_to_screen(screen_num) # Mover la ventana a una pantalla específica
        self.set_as_dock() # Hacer que la ventana se comporte como un dock
        self.load_html("index.html") # Cargar un HTML en el WebView
        
    
    # Mover la ventana a una pantalla específica
    def move_to_screen(self, screen_num):
        self.setGeometry(0, 0, QApplication.primaryScreen().availableGeometry().width(), 40)
        ##self.move(QApplication.primaryScreen().availableGeometry().topLeft())
    
