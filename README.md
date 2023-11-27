# Navale

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Vasak-OS_navale&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Vasak-OS_navale)

Navale is a simple topbar/panel for your desktop. It is written in JavaScript and HTML. It is designed to be simple and easy to use. 

## Dependencies

Navale depends on the following packages:

* [Bootstrap](https://getbootstrap.com/)
* [NW.js](https://nwjs.io/)
* [Vue](https://vuejs.org/) (libvasak-vue)
* libvasak-ui
* hydriam
* python-dbus
* python-gobject
* python-xlib

### Build Dependencies

* [Node.js](https://nodejs.org/)
* [NPM](https://www.npmjs.com/)

## Start Navale

To start Navale, run the following steps:

1. Clone the repository

```bash
git clone git@github.com:Vasak-OS/navale.git
```

2. Move to the directory

```bash
cd navale
```

3. Install dependencies

```bash
npm install
```

4. Start Navale

```bash
nw ./
```

## Build Navale

[PKGBUILD](https://github.com/Vasak-OS/PKGBUILDS/blob/main/navale/PKGBUILD)


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

1. Fork it
2. Create your feature branch

```bash
git checkout -b feature/battery-indicator
```

3. Commit your changes 

```bash
git commit -am 'Add some battery-indicator'
```

4. Push to the branch

```bash
git push origin feature/battery-indicator
```

5. Create a new Pull Request

## Acknowledgements

- [Bootstrap](https://getbootstrap.com/)
- [Vue](https://vuejs.org/)
- [NW.js](https://nwjs.io/)

