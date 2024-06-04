from Vasak.vsk_window import VSKWindow
from Vasak.system.vsk_config_manager import VSKConfigManager
from PyQt6.QtWidgets import QApplication
from PyQt6.QtCore import Qt
from src.x11.x11_window_status_manager import X11WindowStatusManager
from src.navale_binding import NavaleBinding

class NavaleWindow(VSKWindow):
    def __init__(self):
        super().__init__()
        self.shareObject = NavaleBinding(self)
        self.windowStatusManager = X11WindowStatusManager(self)
        self.configManager = VSKConfigManager()
        self.channel.registerObject("vsk", self.shareObject)
        self.move_to_screen() # Mover la ventana a una pantalla específica
        self.set_as_dock() # Hacer que la ventana se comporte como un dock
        self.load_html("ui/dist/index.html") # Cargar un HTML en el WebView
    
    # Mover la ventana a una pantalla específica
    def move_to_screen(self):
        self.setGeometry(0, 0, QApplication.primaryScreen().availableGeometry().width(), 40)
        self.setScreen(QApplication.primaryScreen())
        self.move(QApplication.primaryScreen().availableGeometry().bottomLeft() - self.rect().bottomLeft())
    
    def send_Javascript(self, message):
        self.webview.page().runJavaScript(message)
    
    def load_ui_config(self):
        self.configManager.reload()
        darkMode = self.configManager.get('STYLE', 'darkmode')
        radius = self.configManager.get('STYLE', 'radius')
        color = self.configManager.get('STYLE', 'color')

        self.send_Javascript(f'document.body.style.setProperty("--system-rounded", "{radius}px")')
        self.send_Javascript(f'document.body.style.setProperty("--system-accent-color", "{color}")')
        if darkMode == 'true':
            self.send_Javascript('document.body.classList.add("dark")')
        else:
            self.send_Javascript('document.body.classList.remove("dark")')

    def toggleWindow(self, id):
        self.windowStatusManager.toggleWindow(id)
    
    def set_as_dock(self):
        self.setAttribute(Qt.WidgetAttribute.WA_X11NetWmWindowTypeDock, True)  # Seteo tipo dock x11
        self.setAttribute(Qt.WidgetAttribute.WA_AlwaysShowToolTips, True)
        self.setAttribute(Qt.WidgetAttribute.WA_AlwaysStackOnTop, True)  # Mantener la ventana por encima de las demás
        self.setWindowFlags(
            self.windowFlags() | Qt.WindowType.FramelessWindowHint | Qt.WindowType.WindowStaysOnTopHint
        )  # Establecer atributos de la ventana (sin bordes, sin barra de título, etc.)