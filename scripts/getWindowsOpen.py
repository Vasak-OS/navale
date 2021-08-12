import Icons as icons
import json
import gi
gi.require_version('Wnck', '3.0')
from gi.repository import Wnck

screen = Wnck.Screen.get_default()
screen.force_update()
temp_windows = screen.get_windows()
temp_list = []

for win in temp_windows:
    if (win.get_window_type() < 1):
        datawin = json.dumps({
            "name": win.get_class_instance_name().replace("-", " "),
            "id": win.get_xid(),
            "icon": icons.get(win.get_class_instance_name())
        })
        temp_list.append(datawin)
print(temp_list)
