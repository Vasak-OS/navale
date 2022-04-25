const desktopServiceName = 'ar.net.lynx.os.desktop.service';
const desktopInterfaceName = desktopServiceName;
const desktopObjectPath = `/${desktopServiceName.replace(/\./g, '/')}`;
const desktopServiceDBUS = sessionBus.getService(desktopServiceName);

desktopServiceDBUS.getInterface(desktopObjectPath, desktopInterfaceName, (err, iface) => {
  if (err) {
    console.error(
      `Failed to request interface '${desktopInterfaceName}' at '${desktopObjectPath}' : ${
        err
      }`
        ? err
        : '(no error)'
    );
    process.exit(1);
  }
  iface.on('updateWindows', function(){
    writewindowsOpens(arguments[0]);
  });
});

async function toggleWin(win){
  desktopServiceDBUS.getInterface(desktopObjectPath, desktopInterfaceName, (err, iface) => {
    if (err) {
      console.error(
        `Failed to request interface '${desktopInterfaceName}' at '${desktopObjectPath}' : ${
          err
        }`
          ? err
          : '(no error)'
      );
      process.exit(1);
    }
    iface.toggleWindow(win.toString());
  });
}


