const homePath = nw.App.dataPath.concat('/../../../');
const execSynx = require('child_process').spawnSync;
const exec = require('child_process').spawn;
const dbus = require('dbus-native');
const sessionBus = dbus.sessionBus();
const process = require('process');
const systeminformation = require('systeminformation');

async function openMenu(){
  exec('lynx-menu')
}

async function writewindowsOpens(winopens){
  windowsOpen = JSON.parse(winopens.replaceAll('\'', ''));

  elem = document.getElementById('windowsOpenSection');

  html = ``

  for (openwin in windowsOpen){
    html = html.concat(`
      <button onclick="toggleWin(${windowsOpen[openwin].id})" class="btn win-button">
        <img src="file://${windowsOpen[openwin].icon}" alt="${windowsOpen[openwin].name}" class="img-fluid win-img" />
      </button>
    `)
  }

  elem.innerHTML = html

}