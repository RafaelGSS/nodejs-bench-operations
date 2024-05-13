## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,141,608|5070805|
|{ ...object, __proto__: null }|2,231,713|1115857|
|{ ...object, newProp: true }|9,686,499|4843250|
|structuredClone|316,180|158091|
|JSON.parse + JSON.stringify|289,520|144761|
|loop + object.keys starting with {}|1,480,683|740342|
|loop + object.keys starting with { __proto__: null }|905,915|452958|
|loop + object.keys starting with { randomProp: true }|679,601|339801|
|object.keys + reduce(FN, {})|1,557,119|778560|
|object.keys + reduce(FN, { __proto__: null })|893,034|446518|
|object.keys + reduce(FN, { newProp: true })|708,247|354124|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:49:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10141608.316495258,"samples":5070805},{"name":"{ ...object, __proto__: null }","opsSec":2231713.263536854,"samples":1115857},{"name":"{ ...object, newProp: true }","opsSec":9686499.612506548,"samples":4843250},{"name":"structuredClone","opsSec":316180.1573019531,"samples":158091},{"name":"JSON.parse + JSON.stringify","opsSec":289520.51765518717,"samples":144761},{"name":"loop + object.keys starting with {}","opsSec":1480683.0790157826,"samples":740342},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":905915.0433538057,"samples":452958},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":679601.8382558771,"samples":339801},{"name":"object.keys + reduce(FN, {})","opsSec":1557119.06884251,"samples":778560},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":893034.503273458,"samples":446518},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":708247.3781595603,"samples":354124}]}-->
