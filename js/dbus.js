const dockServiceName = 'ar.net.lynx.os.dock';
const dockInterfaceName = dockServiceName;
const dockObjectPath = `/${dockServiceName.replace(/\./g, '/')}`;

if (!sessionBus) {
  console.log('Could not connect to the DBus session bus.');
}

sessionBus.requestName(dockServiceName, 0x4, (err, retCode) => {
  if (err) {
    console.error(
      `Could not request service name ${dockServiceName}, the error was: ${err}.`
    );
  }

  // Return code 0x1 means we successfully had the name
  if (retCode === 1) {
    proceed();
  } else {
    console.error(
      `Failed to request service name "${
        dockServiceName
      }". Check what return code "${retCode}" means.`
    );
  }
});

async function proceed() {
  // First, we need to create our interface description (here we will only expose method calls)
  var ifaceDesc = {
    name: dockInterfaceName,
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

  sessionBus.exportInterface(iface, dockObjectPath, ifaceDesc);

}