# Navale

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Vasak-OS_navale&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Vasak-OS_navale)

Navale is a simple topbar/panel for your desktop. It is written in JavaScript and HTML. It is designed to be simple and easy to use. 

## Dependencies

Navale depends on the following packages:

* [Bootstrap](https://getbootstrap.com/) ([libvasak-bootstrap](https://github.com/Vasak-OS/PKGBUILDS/blob/main/libvasak-bootstrap/PKGBUILD))
* [libvasak-ui](https://github.com/Vasak-OS/PKGBUILDS/blob/main/libvasak-ui/PKGBUILD)
* [hydriam](https://github.com/Vasak-OS/PKGBUILDS/blob/main/hydriam/PKGBUILD)
* [python-libvasak](https://github.com/Vasak-OS/PKGBUILDS/blob/main/python-libvasak/PKGBUILD)
* python-xlib

### Build Dependencies

* [NPM](https://www.npmjs.com/) | [YARN](https://yarnpkg.com/) 

## Start Navale

To start Navale, run the following steps:

1. Clone the repository

```bash
git clone git@github.com:Vasak-OS/navale.git
```

2. Move to the directory ui

```bash
cd navale/ui
```

3. Install dependencies and build UI

```bash
yarn install
yarn build
```

4. Start Navale

```bash
cd ../
python navale.py
```

## Build Navale

Use [PKGBUILD](https://github.com/Vasak-OS/PKGBUILDS/blob/main/navale/PKGBUILD) to build Navale for Arch. If you want to build Navale for another distribution, you can use the steps in the PKGBUILD.


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
- [PyQT](https://pypi.org/project/PyQt6/)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->