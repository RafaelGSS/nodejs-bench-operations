## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,147,108|96|
|{ ...object, __proto__: null }|29,682,602|91|
|{ ...object, newProp: true }|887,687|86|
|structuredClone|262,504|99|
|JSON.parse + JSON.stringify|194,441|100|
|loop + object.keys starting with {}|1,575,811|94|
|loop + object.keys starting with { __proto__: null }|781,869|98|
|loop + object.keys starting with { randomProp: true }|573,464|96|
|object.keys + reduce(FN, {})|557,646|97|
|object.keys + reduce(FN, { __proto__: null })|797,217|97|
|object.keys + reduce(FN, { newProp: true })|577,436|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:50:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":29147107.958681025,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":29682602.286131367,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":887686.6800674987,"samples":3},{"name":"structuredClone","opsSec":262504.2469456401,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":194441.2373266531,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1575810.7801126204,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":781869.0385770724,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":573463.904344708,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":557645.7000258303,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":797216.5074089095,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":577435.521619565,"samples":4}]}-->
