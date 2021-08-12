const winMenu = nw.Window.get();

// Set windows Properties
winMenu.setAlwaysOnTop(true);
winMenu.setShowInTaskbar(false);
winMenu.setResizable(false);

exec('python', ["scripts/setMenu.py"]);

// Add Windows Data
setIMG();
var menuApps = JSON.parse(execSynx('python', ["scripts/getMenu.py"])
  .stdout
  .toString()
  .replaceAll('\'s', 's') // fix to comments user 's 
  .replaceAll('\'', '\"'));

winMenu.focus();

winMenu.on('blur', function (evt) {
  winMenu.close();
});
  
retCategories();
initMenu();

function openApp(appPath){
  exec('scripts/runapp', [appPath]);
  winMenu.close();
}

function retCategories(){
  let elemHTML = document.getElementById("menu-category");
  let cats = ``;
  for (let category in menuApps){
    let catName = category.replaceAll(" ", "-").toLowerCase();
    cats = cats.concat(`<li class="nav-item" role="presentation">`);
    if (catName == "accesorios") {
      cats = cats.concat(`<button class="nav-link active" data-bs-toggle="tab" role="tab" aria-selected="true" data-bs-target="#${catName}" id="${catName}-tab">
                            <img src="file://${menuApps[category].icon}" class="img-fluid category-img" />`);
    } else {
      cats = cats.concat(`<button class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false" data-bs-target="#${catName}" id="${catName}-tab">
                            <img src="file://${menuApps[category].icon}" class="img-fluid category-img" />`);
    } 
    cats = cats.concat(`</button></li>`);
  }
  elemHTML.innerHTML = cats;
}

function initMenu(){
  let elemHTML = document.getElementById('menu-content');
  let menuHTML = ``;
  for (let category in menuApps){
    let formCat = category.replaceAll(" ", "-").toLowerCase();
    if (formCat == 'accesorios'){
      menuHTML = menuHTML.concat(`
      <div class="tab-pane fade show active" id="${formCat}" role="tabpanel" aria-labelledby="${formCat}-tab">
        <div class="container-fluid">
          <div class="row">
      `);
    }else{
      menuHTML = menuHTML.concat(`
      <div class="tab-pane fade" id="${formCat}" role="tabpanel" aria-labelledby="${formCat}-tab">
        <div class="container-fluid">
          <div class="row">
      `);
    }
    
    let appMenu = menuApps[category];
    let apps = appMenu['apps'];
    for (let app in apps){
      if(apps[app].name){
        menuHTML = menuHTML.concat(`
          <button class="btn col-3 btn-app"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="${apps[app].name}"
            onclick="openApp('${apps[app].path}')">
            <img src="file://${apps[app].icon}" class="img-fluid" style='width:100%;' />
            <span class="name-app text-center">${apps[app].name}</span>
            <span class='text-muted' style='display:none;'>${apps[app].description}</span>
            <span style='display:none;'>${apps[app].keywords}</span>
          </button>
        `);
      }
    }

    menuHTML = menuHTML.concat(`
          </div>
        </div>
      </div>
    `);
  }
  elemHTML.innerHTML = menuHTML;
}
