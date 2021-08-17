const homePath = nw.App.dataPath.concat('/../../../');
const execSynx = require('child_process').spawnSync;
const exec = require('child_process').spawn;

function openMenu(){
  nw.Window.open("/menu/index.html",
    {
      "id": "ar.net.lynx.os.menu",
      "new_instance": true,
      "focus": true,
      "title": "Lynx Menu",
      "show": true,
      "transparent": true,
      "icon": "icon.svg",
      "resizable": false,
      "frame": false,
      "position": "center",
      "show_in_taskbar": false,
      "width": 700,
      "height": 620
    })
}

function setIMG(){
  elem = document.getElementById('imgDiv');
  elem.innerHTML = `
    <img
      src="file://${homePath}.face"
      class="img-fluid lynx-profile-picture" />`
}

function writewindowsOpens(winopens){
  windowsOpen = JSON.parse(winopens.replaceAll('\'', ''));

  elem = document.getElementById('windowsOpenSection');

  html = ``

  for (openwin in windowsOpen){
    html = html.concat(`
      <button class="btn win-button">
        <img src="file://${windowsOpen[openwin].icon}" alt="${windowsOpen[openwin].icon}" class="img-fluid win-img" />
      </button>
    `)
  }

  elem.innerHTML = html

}