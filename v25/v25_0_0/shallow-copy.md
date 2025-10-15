## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,456,929|11728467|
|{ ...object, __proto__: null }|2,430,067|1215039|
|{ ...object, newProp: true }|22,038,463|11023638|
|structuredClone|312,032|156031|
|JSON.parse + JSON.stringify|341,842|170955|
|loop + object.keys starting with {}|1,751,075|875652|
|loop + object.keys starting with { __proto__: null }|957,197|478678|
|loop + object.keys starting with { randomProp: true }|692,987|346494|
|object.keys + reduce(FN, {})|1,822,955|911707|
|object.keys + reduce(FN, { __proto__: null })|1,007,897|504023|
|object.keys + reduce(FN, { newProp: true })|731,584|365800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:32:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":11728467,"opsSec":23456929.074044894},{"name":"{ ...object, __proto__: null }","samples":1215039,"opsSec":2430067.1327397823},{"name":"{ ...object, newProp: true }","samples":11023638,"opsSec":22038463.52366772},{"name":"structuredClone","samples":156031,"opsSec":312032.23524507997},{"name":"JSON.parse + JSON.stringify","samples":170955,"opsSec":341842.63512295217},{"name":"loop + object.keys starting with {}","samples":875652,"opsSec":1751075.9993984224},{"name":"loop + object.keys starting with { __proto__: null }","samples":478678,"opsSec":957197.1378198246},{"name":"loop + object.keys starting with { randomProp: true }","samples":346494,"opsSec":692987.2446439033},{"name":"object.keys + reduce(FN, {})","samples":911707,"opsSec":1822955.2642454843},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":504023,"opsSec":1007897.9377771446},{"name":"object.keys + reduce(FN, { newProp: true })","samples":365800,"opsSec":731584.2211915173}]}-->
