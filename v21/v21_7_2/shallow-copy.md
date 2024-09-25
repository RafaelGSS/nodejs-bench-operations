## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,341,929|4670965|
|{ ...object, __proto__: null }|2,102,783|1051392|
|{ ...object, newProp: true }|8,275,763|4137883|
|structuredClone|272,379|136190|
|JSON.parse + JSON.stringify|241,422|120712|
|loop + object.keys starting with {}|1,242,935|621468|
|loop + object.keys starting with { __proto__: null }|704,017|352010|
|loop + object.keys starting with { randomProp: true }|491,723|245862|
|object.keys + reduce(FN, {})|1,265,957|632979|
|object.keys + reduce(FN, { __proto__: null })|701,071|350536|
|object.keys + reduce(FN, { newProp: true })|502,217|251109|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:52:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9341929.402103877,"samples":4670965},{"name":"{ ...object, __proto__: null }","opsSec":2102783.701409662,"samples":1051392},{"name":"{ ...object, newProp: true }","opsSec":8275763.566875312,"samples":4137883},{"name":"structuredClone","opsSec":272379.25694954774,"samples":136190},{"name":"JSON.parse + JSON.stringify","opsSec":241422.56595034403,"samples":120712},{"name":"loop + object.keys starting with {}","opsSec":1242935.2293780972,"samples":621468},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":704017.8752745113,"samples":352010},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":491723.3666599784,"samples":245862},{"name":"object.keys + reduce(FN, {})","opsSec":1265957.8227656975,"samples":632979},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":701071.05776173,"samples":350536},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":502217.55503485445,"samples":251109}]}-->
