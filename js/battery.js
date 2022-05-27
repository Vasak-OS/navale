async function startBatteryData(){
    let elem = document.getElementById("battery");
    let battery = await systeminformation.battery();

    
    if (battery.hasBattery){
        let icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-missing-symbolic']).stdout.toString();

        if(battery.isCharging){
            if (battery.percent === 100){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-full-charging-symbolic']).stdout.toString();
            }else if (battery.percent > 90){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-90-charging-symbolic']).stdout.toString();
            }else if (battery.percent > 80){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-80-charging-symbolic']).stdout.toString();
            }else if (battery.percent > 70){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-70-charging-symbolic']).stdout.toString();
            }else if (battery.percent > 60){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-60-charging-symbolic']).stdout.toString();
            }else if (battery.percent > 50){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-50-charging-symbolic']).stdout.toString();
            }else if (battery.percent > 40){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-40-charging-symbolic']).stdout.toString();
            }else if (battery.percent > 30){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-30-charging-symbolic']).stdout.toString();
            }else if (battery.percent > 20){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-20-charging-symbolic']).stdout.toString();
            }else{
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-10-charging-symbolic']).stdout.toString();
            }
        }else{
            if (battery.percent === 100){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-full-symbolic']).stdout.toString();
            }else if (battery.percent > 90){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-90-symbolic']).stdout.toString();
            }else if (battery.percent > 80){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-80-symbolic']).stdout.toString();
            }else if (battery.percent > 70){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-70-symbolic']).stdout.toString();
            }else if (battery.percent > 60){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-60-symbolic']).stdout.toString();
            }else if (battery.percent > 50){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-50-symbolic']).stdout.toString();
            }else if (battery.percent > 40){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-40-symbolic']).stdout.toString();
            }else if (battery.percent > 30){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-30-symbolic']).stdout.toString();
            }else if (battery.percent > 20){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-20-symbolic']).stdout.toString();
            }else if (battery.percent > 10){
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-level-10-symbolic']).stdout.toString();
            }else{
                icon = execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'battery-empty-symbolic']).stdout.toString();
            }
        }

        elem.innerHTML = `<img
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="${battery.percent}%"
            src="file://${icon}"
            class="img-fluid dock-system-icon"
            alt="Menu" />
        `;
        setTimeout(startBatteryData, 3000);
    }

}

startBatteryData();