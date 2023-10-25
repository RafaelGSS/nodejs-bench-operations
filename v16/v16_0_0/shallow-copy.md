## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,345,117|94|
|{ ...object, __proto__: null }|13,572,197|95|
|{ ...object, newProp: true }|463,111|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|137,288|99|
|loop + object.keys starting with {}|306,263|91|
|loop + object.keys starting with { __proto__: null }|419,911|93|
|loop + object.keys starting with { randomProp: true }|323,626|92|
|object.keys + reduce(FN, {})|314,973|97|
|object.keys + reduce(FN, { __proto__: null })|419,162|97|
|object.keys + reduce(FN, { newProp: true })|323,474|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":13345117.16148596,"samples":9},{"name":"{ ...object, __proto__: null }","opsSec":13572197.461420244,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":463110.5407541469,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":137287.9788915144,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":306262.50143285166,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":419911.2478145471,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":323625.98222581093,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":314972.96820378845,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":419161.71170925687,"samples":9},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":323473.8309314779,"samples":5}]}-->
