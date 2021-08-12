var ipc = require('node-ipc');

ipc.config.id = 'lynx-dock';
ipc.config.retry = 1500;
ipc.config.socketRoot = '/tmp/';
ipc.config.appspace = 'lynxService'

// ipc.connectTo(
//   'lynxService',
//   '/tmp/',
//   function(){
//     ipc.of.lynxService.on(
//       'connect',
//       function(){
//         ipc.log('## connected to world ##'.rainbow, ipc.config.delay);
//         console.log("Se Conecta")
//       }
//     );
//     ipc.of.lynxService.on(
//         '',  //any event or message type your server listens for
//         function(data){
//           ipc.log('got a message from world : '.debug, data);
//           console.log(data)
//         }
//     );
//   }
// );

// console.log(ipc.of.lynxService.connect());
// console.log(ipc);

