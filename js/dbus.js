const dbus = require('dbus-native');
const serviceName = 'ar.net.lynx.os.dock';
const interfaceName = serviceName;
const objectPath = `/${serviceName.replace(/\./g, '/')}`;
const sessionBus = dbus.sessionBus();

if (!sessionBus) {
  console.log('Could not connect to the DBus session bus.');
}

sessionBus.requestName(serviceName, 0x4, (err, retCode) => {
  if (err) {
    console.log(
      `Could not request service name ${serviceName}, the error was: ${err}.`
    );
  }

  // Return code 0x1 means we successfully had the name
  if (retCode === 1) {
    console.log(`Successfully requested service name "${serviceName}"!`);
    proceed();
  } else {
    console.log(
      `Failed to request service name "${
        serviceName
      }". Check what return code "${retCode}" means.`
    );
  }
});

function proceed() {
  // First, we need to create our interface description (here we will only expose method calls)
  var ifaceDesc = {
    name: interfaceName,
    methods: {
      UpdateWindowsDock: ['s', '', ['Lista de Ventanas'], []],
      GiveTime: ['', 's', [], ['current_time']],
      Capitalize: ['s', 's', ['initial_string'], ['capitalized_string']]
    },
    properties: {
      Flag: 'b',
      StringProp: 's'
    },
    signals: {
      Rand: ['i', 'random_number']
    }
  };

  // Then we need to create the interface implementation (with actual functions)
  var iface = {
    UpdateWindowsDock: function(wins) {
      writewindowsOpens(wins);
    },
    GiveTime: function() {
      return new Date().toString();
    },
    Capitalize: function(str) {
      return str.toUpperCase();
    },
    Flag: true,
    StringProp: 'initial string',
    emit: function() {
      // no nothing, as usual
    }
  };

  sessionBus.exportInterface(iface, objectPath, ifaceDesc);
  console.log('Interface exposed to DBus, ready to receive function calls!');

}