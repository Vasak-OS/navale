import sys
import signal
from PyQt6.QtWidgets import QApplication
from src.NavaleWindow import NavaleWindow

app = QApplication(sys.argv)

if __name__ == "__main__":
    app.setApplicationName("Navale")
    app.setApplicationVersion("0.1.1")
    app.setOrganizationName("Vasak Group")
    window = NavaleWindow()
    window.show()
    signal.signal(signal.SIGINT, signal.SIG_DFL)  # Habilitar Ctrl+C
    sys.exit(app.exec())
    
