## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,059,233|91|
|{ ...object, __proto__: null }|29,956,118|99|
|{ ...object, newProp: true }|940,073|88|
|structuredClone|309,859|99|
|JSON.parse + JSON.stringify|190,327|93|
|loop + object.keys starting with {}|1,596,071|95|
|loop + object.keys starting with { __proto__: null }|873,117|96|
|loop + object.keys starting with { randomProp: true }|682,098|98|
|object.keys + reduce(FN, {})|1,598,806|92|
|object.keys + reduce(FN, { __proto__: null })|879,741|97|
|object.keys + reduce(FN, { newProp: true })|684,079|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:27:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":29059232.885949407,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":29956118.031638734,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":940073.3782443746,"samples":3},{"name":"structuredClone","opsSec":309858.7760920675,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":190326.80472327775,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":1596070.651250563,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":873117.4929500415,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":682097.5451930573,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":1598806.400166534,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":879741.1651285506,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":684079.3935872677,"samples":6}]}-->
