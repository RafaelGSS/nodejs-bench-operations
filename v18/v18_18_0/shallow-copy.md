## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|12,225,905|94|
|{ ...object, __proto__: null }|12,108,200|94|
|{ ...object, newProp: true }|376,125|74|
|structuredClone|142,912|92|
|JSON.parse + JSON.stringify|123,283|96|
|loop + object.keys starting with {}|557,098|95|
|loop + object.keys starting with { __proto__: null }|351,194|94|
|loop + object.keys starting with { randomProp: true }|260,468|95|
|object.keys + reduce(FN, {})|251,171|96|
|object.keys + reduce(FN, { __proto__: null })|355,714|94|
|object.keys + reduce(FN, { newProp: true })|262,156|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":12225905.040838035,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":12108199.93222299,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":376125.114694793,"samples":3},{"name":"structuredClone","opsSec":142911.88836042865,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":123282.63779483731,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":557098.4594274142,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":351194.13200181304,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":260468.00734445718,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":251170.54991967647,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":355714.35815250786,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":262156.43380635016,"samples":6}]}-->
