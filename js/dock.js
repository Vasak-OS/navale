const win = nw.Window.get();

// Set windows Properties
win.setShowInTaskbar(false);
win.resizeTo(Math.round(screen.width), 36);
win.setResizable(false);
win.y = 0;
win.x = 0;

var idApp = execSynx('python', ["/usr/share/Lynx/lynx-desktop-service/Setters/setDock.py", `${process.pid.toString()}`, Math.round(screen.width)])
  .stdout
  .toString();

console.log(idApp);

iconMenu = execSynx('python', ["/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py", "app-launcher"]).stdout.toString()

console.trace(`Scripts - getIcon [Trace] - ${iconMenu}`);

document.getElementById("dockMenuLauncher").innerHTML = `
<img
  src="file://${iconMenu}"
  class="img-fluid dock-menu-launcher-icon"
  alt="Menu" />
`;