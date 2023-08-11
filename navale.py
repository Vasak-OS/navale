import sys
import signal
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import QApplication
from Vasak.VSKDockWindow import VSKDockWindow
   

app = QApplication(sys.argv)
app.setAttribute(Qt.AA_UseHighDpiPixmaps) # Usar pixeles de alta resolución
app.setAttribute(Qt.AA_EnableHighDpiScaling) # Habilitar escalamiento de alta resolución

if __name__ == "__main__":
    window = VSKDockWindow()
    window.show()
    signal.signal(signal.SIGINT, signal.SIG_DFL)  # Habilitar Ctrl+C
    sys.exit(app.exec_())
