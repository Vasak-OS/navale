import gi
import sys
gi.require_version('Wnck', '3.0')
from gi.repository import Wnck

screen = Wnck.Screen.get_default()
screen.force_update()
temp_windows = screen.get_windows()

for win in temp_windows:
  if (str(win.get_pid()) == sys.argv[1]):
    win.set_window_type(2)
    print(win.get_xid())
    win.make_above()

