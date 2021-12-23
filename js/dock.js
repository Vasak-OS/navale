const win = nw.Window.get();

// Set windows Properties
win.setShowInTaskbar(false);
win.moveBy(0,0);
win.resizeTo(Math.round(screen.width), 34);
win.setResizable(false);

var idApp = execSynx('python', ["/usr/share/Lynx/lynx-dock/scripts/setDock.py", `${process.pid.toString()}`])
  .stdout
  .toString();

console.log(idApp);

exec('scripts/fixxprop',[idApp, Math.round(screen.width)])

iconMenu = execSynx('python', ["/usr/share/Lynx/lynx-dock/scripts/getIcon.py", "app-launcher"]).stdout.toString()

console.trace(`Scripts - getIcon [Trace] - ${iconMenu}`);

document.getElementById("dockMenuLauncher").innerHTML = `
<img
  src="file://${iconMenu}"
  class="img-fluid dock-menu-launcher-icon"
  alt="Menu" />
`;