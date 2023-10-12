import sys
import signal
from gi.repository import GLib
from dbus.mainloop.glib import DBusGMainLoop
from PyQt6.QtWidgets import QApplication
from src.NavaleWindow import NavaleWindow
   

app = QApplication(sys.argv)

if __name__ == "__main__":
    DBusGMainLoop(set_as_default=True)
    loop = GLib.MainLoop()
    
    window = NavaleWindow()
    window.show()
    signal.signal(signal.SIGINT, signal.SIG_DFL)  # Habilitar Ctrl+C
    sys.exit(app.exec())
    
    loop.run()
