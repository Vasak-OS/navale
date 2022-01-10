const desktopServiceName = 'ar.net.lynx.os.desktop.service';
const desktopInterfaceName = desktopServiceName;
const desktopObjectPath = `/${desktopServiceName.replace(/\./g, '/')}`;

async function toggleWin(win){
  const desktopServicePrev = sessionBus.getService(desktopServiceName)

  desktopServicePrev.getInterface(desktopObjectPath, desktopInterfaceName, (err, iface) => {
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


