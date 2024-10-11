## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,814,769|11929371|
|{ ...object, __proto__: null }|2,551,133|1275568|
|{ ...object, newProp: true }|19,539,205|9769604|
|structuredClone|297,957|148980|
|JSON.parse + JSON.stringify|296,619|148310|
|loop + object.keys starting with {}|1,630,553|815278|
|loop + object.keys starting with { __proto__: null }|884,430|442216|
|loop + object.keys starting with { randomProp: true }|659,847|330008|
|object.keys + reduce(FN, {})|1,726,340|863171|
|object.keys + reduce(FN, { __proto__: null })|912,837|456420|
|object.keys + reduce(FN, { newProp: true })|681,810|340906|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:24:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{ ...object }","opsSec":23814769.45708366,"samples":11929371},{"name":"{ ...object, __proto__: null }","opsSec":2551133.158037662,"samples":1275568},{"name":"{ ...object, newProp: true }","opsSec":19539205.88976576,"samples":9769604},{"name":"structuredClone","opsSec":297957.88032763934,"samples":148980},{"name":"JSON.parse + JSON.stringify","opsSec":296619.778128406,"samples":148310},{"name":"loop + object.keys starting with {}","opsSec":1630553.8052745783,"samples":815278},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":884430.1709984065,"samples":442216},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":659847.9604789926,"samples":330008},{"name":"object.keys + reduce(FN, {})","opsSec":1726340.795014125,"samples":863171},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":912837.9022985004,"samples":456420},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":681810.2177480907,"samples":340906}]}-->
