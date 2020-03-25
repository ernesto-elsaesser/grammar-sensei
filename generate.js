const fs = require('fs');
const derivations = require('./node_modules/jp_verb/derivations.js');

var nameMap = {};
var nameCounter = 1;
var rules = [];
var invalids = [];

function typeId(name) {
  if (!(name in nameMap)) {
    nameMap[name] = nameCounter;
    nameCounter += 1;
  }
  return nameMap[name];
}

for (let d of derivations) {
  const cType = typeId(d.conjugatedWordType);
  const ucType = typeId(d.unconjugatedWordType);

  rules.push([cType, d.conjugatedEnding, ucType, d.unconjugatedEnding]);

  if (d.cannotFollow) {
    const nType = typeId(d.cannotFollow[0][0]);
    invalids.push([cType, ucType, nType]);
  }
}

var revNameMap = {};
for (let name in nameMap) {
  const id = nameMap[name];
  revNameMap[id] = name;
}

const rulesJson = JSON.stringify(rules);
const namesJson = JSON.stringify(revNameMap);
const invalidsJson = JSON.stringify(invalids);

const script = 'var rules = ' + rulesJson + ';\nvar names = '  + namesJson + ';\nvar invalids = ' + invalidsJson + ';';

fs.writeFileSync("data.js", script);
