import json
import os
from Vasak.system.vsk_icon_manager import VSKIconManager
from Vasak.system.vsk_network_manager import VSKNetworkManager
from Vasak.application.vsk_shell_connector import VSKShellConnector
from PyQt6.QtCore import pyqtSlot, QObject

class NavaleBinding(QObject):
  def __init__(self, window):
    super().__init__()
    self.window = window
    self.iconsManager = VSKIconManager()
    self.networkManager = VSKNetworkManager()
    self.shellConnector = VSKShellConnector()
  
  @pyqtSlot(str, result=str)
  def getGlobalIcon(self, iconName):
      return self.iconsManager.get_icon(iconName)
  
  @pyqtSlot(result=str)
  def getDefaultNetwork(self):
      self.networkManager.updateStatus()
      return json.dumps(self.networkManager.getDefaultConnectionData(), indent=4)
  
  @pyqtSlot()
  def loadUIConfig(self):
    self.window.load_ui_config()
  
  @pyqtSlot(result=str)
  def getHome(self):
      home_path = os.path.expanduser("~")

      if not os.path.isabs(home_path):
        home_path = os.path.join("/", home_path)

      return home_path
  
  @pyqtSlot(str)
  def toggleWindow(self, id):
    self.window.toggleWindow(id)
  
  @pyqtSlot(str)
  def exec(self, command):
    self.shellConnector.run(command)