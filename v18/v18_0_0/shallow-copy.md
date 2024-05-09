## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,744,717|5872359|
|{ ...object, __proto__: null }|10,868,693|5434347|
|{ ...object, newProp: true }|721,062|360532|
|structuredClone|274,977|137489|
|JSON.parse + JSON.stringify|180,156|90079|
|loop + object.keys starting with {}|1,259,525|629763|
|loop + object.keys starting with { __proto__: null }|706,657|353329|
|loop + object.keys starting with { randomProp: true }|575,345|287673|
|object.keys + reduce(FN, {})|1,247,950|623976|
|object.keys + reduce(FN, { __proto__: null })|712,096|356049|
|object.keys + reduce(FN, { newProp: true })|587,573|293787|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:24:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11744717.77038697,"samples":5872359},{"name":"{ ...object, __proto__: null }","opsSec":10868693.663131196,"samples":5434347},{"name":"{ ...object, newProp: true }","opsSec":721062.6463434035,"samples":360532},{"name":"structuredClone","opsSec":274977.29116857715,"samples":137489},{"name":"JSON.parse + JSON.stringify","opsSec":180156.23705372962,"samples":90079},{"name":"loop + object.keys starting with {}","opsSec":1259525.7711757093,"samples":629763},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":706657.0174236952,"samples":353329},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":575345.1267568882,"samples":287673},{"name":"object.keys + reduce(FN, {})","opsSec":1247950.6896574886,"samples":623976},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":712096.6655521891,"samples":356049},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":587573.1561077374,"samples":293787}]}-->
