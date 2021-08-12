import gi
gi.require_version('Wnck', '3.0')
from gi.repository import Wnck

screen = Wnck.Screen.get_default()
screen.force_update()
temp_windows = screen.get_windows()

for win in temp_windows:
  if (win.get_class_instance_name() == 'lynx-dock'):
    win.set_window_type(2)
    print(win.get_xid())
    win.make_above()

