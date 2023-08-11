import sys
import os
import signal
from PyQt5.QtCore import QUrl, Qt
from PyQt5.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QWidget
from PyQt5.QtWebEngineWidgets import QWebEngineView

app = QApplication(sys.argv)

class VSKDockWindow(QMainWindow):
    def __init__(self, screen_num=0):
        super().__init__()
        self.set_attributes() # Establecer atributos de la ventana
        self.move_to_screen(screen_num) # Mover la ventana a una pantalla específica
        self.set_widget() # Establecer el widget central. Y el WebView.
        self.set_webview_poprties()
        self.load_html("index.html") # Cargar un HTML en el WebView
    
    # Mover la ventana a una pantalla específica
    def move_to_screen(self, screen_num):
        desktop = QApplication.desktop()
        available_rect = desktop.availableGeometry(screen_num)
        self.move(available_rect.topLeft())
    
    # Establecer atributos de la ventana
    def set_attributes(self):
        self.setWindowTitle("navale")
        self.setGeometry(0, 0, QApplication.desktop().screenGeometry().width(), 40) # Establecer tamaño
        self.setAttribute(Qt.WA_TranslucentBackground, True) # Fondo transparente
        self.setAttribute(Qt.WA_NoSystemBackground, True) # No dibujar el fondo del sistema
        self.setAttribute(Qt.WA_X11NetWmWindowTypeDock, True) # Seteo tipo dock x11
        self.setAttribute(Qt.WA_AlwaysStackOnTop, True) # Mantener la ventana por encima de las demás
        self.transparent = True # Establecer transparencia
        self.setWindowFlags(
            self.windowFlags() | Qt.FramelessWindowHint | Qt.WindowStaysOnTopHint | Qt.CustomizeWindowHint 
        )
        app.setAttribute(Qt.AA_UseHighDpiPixmaps) # Usar pixeles de alta resolución
        app.setAttribute(Qt.AA_EnableHighDpiScaling) # Habilitar escalamiento de alta resolución
    
    # Cargar un HTML en el WebView
    def load_html(self, html):
        file_path = os.path.abspath(html)
        self.webview.webContent = file_path
        self.webview.load(QUrl.fromLocalFile(file_path))
        
    def set_webview_poprties(self):
        self.webview.setContextMenuPolicy(Qt.NoContextMenu)
        settings = self.webview.settings()
        settings.setAttribute(settings.JavascriptEnabled, True)
        settings.setAttribute(settings.AllowWindowActivationFromJavaScript, True)
        settings.setAttribute(settings.ShowScrollBars, False)
        
    # Establecer el widget central. Y el WebView.
    def set_widget(self):
        layout = QVBoxLayout()
        layout.setContentsMargins(0, 0, 0, 0)
        self.central_widget = QWidget()
        self.central_widget.setLayout(layout)
        self.setCentralWidget(self.central_widget)

        self.webview = QWebEngineView(self)
        layout.addWidget(self.webview)
        
if __name__ == "__main__":
    window = VSKDockWindow()
    window.show()
    signal.signal(signal.SIGINT, signal.SIG_DFL)  # Habilitar Ctrl+C
    sys.exit(app.exec_())
