const win = nw.Window.get();

// Set windows Properties
win.setShowInTaskbar(false);
win.resizeTo(Math.round(screen.width), 36);
win.setResizable(false);
win.y = 0;
win.x = 0;
win.setAlwaysOnTop(true);

exec('python', ['/usr/share/Lynx/lynx-desktop-service/Setters/setDock.py', `${process.pid.toString()}`, Math.round(screen.width)]);

setMenuButton();

async function setMenuButton() {
  iconMenu = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'lynx-menu']).stdout.toString()

  document.getElementById('dockMenuLauncher').innerHTML = `
  <img
    src="file://${iconMenu}"
    class="img-fluid dock-menu-launcher-icon"
    alt="Menu" />
  `;
}