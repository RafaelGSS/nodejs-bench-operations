## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,386,788|11710101|
|{ ...object, __proto__: null }|2,577,319|1288735|
|{ ...object, newProp: true }|19,367,467|9683937|
|structuredClone|318,706|159354|
|JSON.parse + JSON.stringify|304,932|152480|
|loop + object.keys starting with {}|1,721,466|860734|
|loop + object.keys starting with { __proto__: null }|892,789|446467|
|loop + object.keys starting with { randomProp: true }|651,576|325833|
|object.keys + reduce(FN, {})|1,790,989|895495|
|object.keys + reduce(FN, { __proto__: null })|912,207|456464|
|object.keys + reduce(FN, { newProp: true })|666,001|333002|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:15:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23386788.17317116,"samples":11710101},{"name":"{ ...object, __proto__: null }","opsSec":2577319.969049962,"samples":1288735},{"name":"{ ...object, newProp: true }","opsSec":19367467.63179415,"samples":9683937},{"name":"structuredClone","opsSec":318706.1476798697,"samples":159354},{"name":"JSON.parse + JSON.stringify","opsSec":304932.63229625137,"samples":152480},{"name":"loop + object.keys starting with {}","opsSec":1721466.640041354,"samples":860734},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":892789.784095016,"samples":446467},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":651576.9607051658,"samples":325833},{"name":"object.keys + reduce(FN, {})","opsSec":1790989.8567208115,"samples":895495},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":912207.540309079,"samples":456464},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":666001.948713998,"samples":333002}]}-->
