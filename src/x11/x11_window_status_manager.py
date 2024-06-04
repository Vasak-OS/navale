import json
import gi
import time

gi.require_version('Wnck', '3.0')
from gi.repository import Wnck
from Vasak.system.VSKIconManager import VSKIconManager

class X11WindowStatusManager:
  def __init__(self, window):
    self.window = window
    self.iconManager = VSKIconManager()
    self.screen = Wnck.Screen.get(0)
    self.all_windows = self.screen.get_windows()

    # Connect the screen to the default event loop
    self.screen.connect("window-opened", self.windowOpened)
    self.screen.connect('window-closed', self.windowClosed)

  def windowOpened(self, screen, window):
    windowType = window.get_window_type()
    if windowType == Wnck.WindowType.NORMAL:
      self.all_windows.append(window)
      self.emitSignal()
  
  def windowClosed(self, screen, window):
    if window in self.all_windows:
      self.all_windows.remove(window)
      self.emitSignal()
  
  def emitSignal(self):
    windows = []
    for window in self.all_windows:
      windows.append({
        'id': window.get_xid(),
        'name': window.get_name(),
        'icon': self.getAppIcon(window),
      })
    self.window.send_Javascript(f"window.windowManager.update(`{json.dumps(windows)}`)")
  
  def getAppIcon(self, window):
    return self.iconManager.get_icon(window.get_class_group_name().lower())

  def toggleWindow(self, id):
    for window in self.all_windows:
      if str(window.get_xid()) == str(id):
        if window.is_minimized():
          window.unminimize(int(time.time()))
        else:
          window.minimize()
        break