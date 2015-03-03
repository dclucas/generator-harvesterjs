{"changed":true,"filter":false,"title":"_api.js","tooltip":"/app/templates/_api.js","value":"var harvester = require('harvest');\n\nvar options = {\n    adapter: 'mongodb',\n    connectionString: process.env.MONGODB_URL,\n    inflect: true\n};\n\n// define 2 resources\n// posts and comments\n// analogue to the examples used on jsonapi.org\nvar harvesterApp = harvester(options)\n    .resource('post', {\n        title: String\n    })\n    .resource('comment', {\n        body: String,\n        post: 'post'\n    });\n\nmodule.exports = harvesterApp;","undoManager":{"mark":-1,"position":11,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":20,"column":28},"action":"insert","lines":["var harvest = require('harvest');","","var options = {","    adapter: 'mongodb',","    connectionString: process.env.MONGODB_URL,","    inflect: true","};","","// define 2 resources","// posts and comments","// analogue to the examples used on jsonapi.org","var harvestApp = harvest(options)","    .resource('post', {","        title: String","    })","    .resource('comment', {","        body: String,","        post: 'post'","    });","","module.exports = harvestApp;"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":4},"end":{"row":11,"column":16},"action":"remove","lines":["harvesterApp"]},{"start":{"row":11,"column":4},"end":{"row":11,"column":16},"action":"insert","lines":["harvesterApp"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":25},"end":{"row":20,"column":26},"action":"insert","lines":["r"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":23},"end":{"row":12,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425343775892}