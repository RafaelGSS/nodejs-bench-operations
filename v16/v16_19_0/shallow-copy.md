## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,913,193|92|
|{ ...object, __proto__: null }|20,298,750|99|
|{ ...object, newProp: true }|757,969|90|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|208,951|98|
|loop + object.keys starting with {}|537,983|96|
|loop + object.keys starting with { __proto__: null }|806,065|99|
|loop + object.keys starting with { randomProp: true }|570,155|96|
|object.keys + reduce(FN, {})|551,837|100|
|object.keys + reduce(FN, { __proto__: null })|819,213|97|
|object.keys + reduce(FN, { newProp: true })|571,709|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:43:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":19913192.99179119,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":20298749.876349345,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":757968.842058683,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":208951.24803641756,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":537983.0689705719,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":806065.3199783837,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":570154.9064000583,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":551836.5549210401,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":819213.0921138603,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":571708.5348472693,"samples":4}]}-->
