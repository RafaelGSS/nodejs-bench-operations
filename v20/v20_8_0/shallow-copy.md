## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,033,315|91|
|{ ...object, __proto__: null }|21,575,314|95|
|{ ...object, newProp: true }|670,233|87|
|structuredClone|195,732|98|
|JSON.parse + JSON.stringify|149,282|99|
|loop + object.keys starting with {}|1,178,356|95|
|loop + object.keys starting with { __proto__: null }|633,168|97|
|loop + object.keys starting with { randomProp: true }|459,559|96|
|object.keys + reduce(FN, {})|1,179,700|94|
|object.keys + reduce(FN, { __proto__: null })|631,578|97|
|object.keys + reduce(FN, { newProp: true })|461,430|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":21033315.32639696,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":21575313.58953759,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":670233.4769169971,"samples":3},{"name":"structuredClone","opsSec":195731.81816226625,"samples":9},{"name":"JSON.parse + JSON.stringify","opsSec":149282.1411295576,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1178355.756018545,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":633167.6180761819,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":459558.9942811731,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":1179700.3647325337,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":631578.3053954088,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":461429.62523016764,"samples":4}]}-->
