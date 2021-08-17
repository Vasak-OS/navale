const win = nw.Window.get();

// Set windows Properties
win.setShowInTaskbar(false);
win.moveBy(0,0);
win.resizeTo(Math.round(screen.width), 34);
win.setResizable(false);

var idApp = execSynx('python', ["scripts/setDock.py"])
  .stdout
  .toString();

exec('scripts/fixxprop',[idApp, Math.round(screen.width)])

exec('python', ["scripts/setDock.py"]);
iconMenu = execSynx('python', ["scripts/getIcon.py", "app-launcher"]).stdout.toString()

document.getElementById("dockMenuLauncher").innerHTML = `
<img
  src="file://${iconMenu}"
  class="img-fluid dock-menu-launcher-icon"
  alt="Menu" />
`;