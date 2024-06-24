## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,283,859|5141930|
|{ ...object, __proto__: null }|10,029,398|5014700|
|{ ...object, newProp: true }|683,100|341551|
|structuredClone|272,591|136296|
|JSON.parse + JSON.stringify|186,884|93443|
|loop + object.keys starting with {}|1,189,360|594681|
|loop + object.keys starting with { __proto__: null }|740,842|370422|
|loop + object.keys starting with { randomProp: true }|543,249|271625|
|object.keys + reduce(FN, {})|1,194,268|597135|
|object.keys + reduce(FN, { __proto__: null })|726,530|363266|
|object.keys + reduce(FN, { newProp: true })|547,079|273540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:59:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10283859.907020748,"samples":5141930},{"name":"{ ...object, __proto__: null }","opsSec":10029398.233355336,"samples":5014700},{"name":"{ ...object, newProp: true }","opsSec":683100.6039944789,"samples":341551},{"name":"structuredClone","opsSec":272591.5742852608,"samples":136296},{"name":"JSON.parse + JSON.stringify","opsSec":186884.34615136153,"samples":93443},{"name":"loop + object.keys starting with {}","opsSec":1189360.9641387418,"samples":594681},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":740842.4118508422,"samples":370422},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":543249.8310380237,"samples":271625},{"name":"object.keys + reduce(FN, {})","opsSec":1194268.3933294597,"samples":597135},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":726530.3842274265,"samples":363266},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":547079.4415390918,"samples":273540}]}-->
