## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,965,965|95|
|{ ...object, __proto__: null }|25,796,870|97|
|{ ...object, newProp: true }|745,248|89|
|structuredClone|262,609|93|
|JSON.parse + JSON.stringify|172,852|97|
|loop + object.keys starting with {}|1,196,536|95|
|loop + object.keys starting with { __proto__: null }|652,845|98|
|loop + object.keys starting with { randomProp: true }|542,272|98|
|object.keys + reduce(FN, {})|1,214,399|97|
|object.keys + reduce(FN, { __proto__: null })|658,997|93|
|object.keys + reduce(FN, { newProp: true })|544,148|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":24965964.71491103,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":25796869.59529215,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":745248.197624582,"samples":3},{"name":"structuredClone","opsSec":262609.1549208619,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":172851.96007627255,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":1196536.0443641685,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":652845.0737195908,"samples":3},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":542271.8879777235,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":1214398.540838012,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":658997.2118838602,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":544147.7631982714,"samples":6}]}-->
