{"filter":false,"title":"_api.js","tooltip":"/app/templates/_api.js","undoManager":{"mark":56,"position":56,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":20,"column":28},"action":"insert","lines":["var harvest = require('harvest');","","var options = {","    adapter: 'mongodb',","    connectionString: process.env.MONGODB_URL,","    inflect: true","};","","// define 2 resources","// posts and comments","// analogue to the examples used on jsonapi.org","var harvestApp = harvest(options)","    .resource('post', {","        title: String","    })","    .resource('comment', {","        body: String,","        post: 'post'","    });","","module.exports = harvestApp;"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":4},"end":{"row":11,"column":16},"action":"remove","lines":["harvesterApp"]},{"start":{"row":11,"column":4},"end":{"row":11,"column":16},"action":"insert","lines":["harvesterApp"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":25},"end":{"row":20,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":20},"end":{"row":1,"column":22},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":21},"end":{"row":1,"column":23},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":33},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":22},"end":{"row":5,"column":45},"action":"remove","lines":["process.env.MONGODB_URL"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":22},"end":{"row":5,"column":25},"action":"remove","lines":["con"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":28},"action":"insert","lines":["config"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":29},"end":{"row":5,"column":35},"action":"remove","lines":["connec"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":45},"action":"insert","lines":["connectionString"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":0},"end":{"row":1,"column":33},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425344774099,"hash":"68486ba68112d0542f9439b07fbfc427d69503ae"}