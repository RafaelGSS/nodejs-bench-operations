## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,834,632|12417573|
|{ ...object, __proto__: null }|2,413,322|1206662|
|{ ...object, newProp: true }|22,624,040|11312639|
|structuredClone|294,291|147146|
|JSON.parse + JSON.stringify|300,799|150415|
|loop + object.keys starting with {}|1,730,678|865523|
|loop + object.keys starting with { __proto__: null }|923,920|462009|
|loop + object.keys starting with { randomProp: true }|682,023|341013|
|object.keys + reduce(FN, {})|1,762,149|881217|
|object.keys + reduce(FN, { __proto__: null })|945,012|472611|
|object.keys + reduce(FN, { newProp: true })|699,846|349943|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:38:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":12417573,"opsSec":24834632.22112861},{"name":"{ ...object, __proto__: null }","samples":1206662,"opsSec":2413322.2913678177},{"name":"{ ...object, newProp: true }","samples":11312639,"opsSec":22624040.464986566},{"name":"structuredClone","samples":147146,"opsSec":294291.0800460838},{"name":"JSON.parse + JSON.stringify","samples":150415,"opsSec":300799.07905786915},{"name":"loop + object.keys starting with {}","samples":865523,"opsSec":1730678.3519976852},{"name":"loop + object.keys starting with { __proto__: null }","samples":462009,"opsSec":923920.6002903174},{"name":"loop + object.keys starting with { randomProp: true }","samples":341013,"opsSec":682023.5419871546},{"name":"object.keys + reduce(FN, {})","samples":881217,"opsSec":1762149.5432478318},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":472611,"opsSec":945012.4604971091},{"name":"object.keys + reduce(FN, { newProp: true })","samples":349943,"opsSec":699846.1885497181}]}-->
