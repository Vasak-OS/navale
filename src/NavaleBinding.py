import json
from Vasak.system.VSKIconManager import VSKIconManager
from Vasak.system.VSKNetworkManager import VSKNetworkManager
from PyQt6.QtCore import pyqtSlot, QObject

class NavaleBinding(QObject):
  def __init__(self, window):
    super().__init__()
    self.window = window
    self.iconsManager = VSKIconManager()
    self.networkManager = VSKNetworkManager()
  
  @pyqtSlot(str, result=str)
  def getGlobalIcon(self, iconName):
      return self.iconsManager.get_icon(iconName)
  
  @pyqtSlot(result=str)
  def getDefaultNetwork(self):
      self.networkManager.updateStatus()
      return json.dumps(self.networkManager.getDefaultConnectionData(), indent=4)