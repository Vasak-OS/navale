async function startNetworkData(){
    let elem = document.getElementById("network");
    let device = await systeminformation.networkInterfaces('default');
    let icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-disconnected-symbolic']).stdout.toString();
    let data = device.ip4;
    
    if (device.type === 'wired'){
        if (device.operstate === 'down'){
            icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wired-disconnected-symbolic']).stdout.toString();
        }else{
            icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wired-symbolic']).stdout.toString();
        }
    }else{
        if (device.operstate === 'down'){
            icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-disconnected-symbolic']).stdout.toString();
        }else{
            let wifi = await systeminformation.wifiConnections();
            let myWifi = wifi.find(conn => conn.iface === device.iface)
            data = `${myWifi.ssid}\n${device.ip4}`;

            //elem.innerHTML = myWifi.signalLevel;
            if (myWifi.signalLevel >= -30){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-signal-excellent-symbolic']).stdout.toString();
            } else if (myWifi.signalLevel >= -67){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-signal-good-symbolic']).stdout.toString();
            } else if (myWifi.signalLevel >= -70){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-signal-ok-symbolic']).stdout.toString();
            } else if (myWifi.signalLevel >= -80){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-signal-weak-symbolic']).stdout.toString();
            } else {
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-signal-none-symbolic']).stdout.toString();
            }
        }
    }

    elem.innerHTML = `<img
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="${data}"
        src="file://${icon}"
        class="img-fluid dock-system-icon"
        alt="Menu" />
    `;

    setTimeout(startNetworkData, 2500); 
}

startNetworkData();