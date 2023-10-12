import dbus

session_bus = dbus.SessionBus()
tray_service = session_bus.get_object('org.gnome.Shell', '/org/gnome/Shell')
tray_properties = tray_service.Get('org.gnome.Shell', 'TrayIconWatcher')

for item in tray_properties:
    app_id = item[1]
    title = item[2]
    icon_name = item[3]
    print(f"App ID: {app_id}")
    print(f"Title: {title}")
    print(f"Icon Name: {icon_name}")
    print("----")
