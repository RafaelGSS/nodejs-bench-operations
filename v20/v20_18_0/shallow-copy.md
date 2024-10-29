## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,801,506|10901717|
|{ ...object, __proto__: null }|20,396,555|10198400|
|{ ...object, newProp: true }|832,027|417344|
|structuredClone|282,228|141168|
|JSON.parse + JSON.stringify|189,441|94724|
|loop + object.keys starting with {}|1,519,765|761739|
|loop + object.keys starting with { __proto__: null }|825,459|412746|
|loop + object.keys starting with { randomProp: true }|606,857|303429|
|object.keys + reduce(FN, {})|1,553,783|776896|
|object.keys + reduce(FN, { __proto__: null })|839,812|420268|
|object.keys + reduce(FN, { newProp: true })|603,199|301600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:12:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":21801506.13641537,"samples":10901717},{"name":"{ ...object, __proto__: null }","opsSec":20396555.404507592,"samples":10198400},{"name":"{ ...object, newProp: true }","opsSec":832027.8886918918,"samples":417344},{"name":"structuredClone","opsSec":282228.7835429623,"samples":141168},{"name":"JSON.parse + JSON.stringify","opsSec":189441.9317960407,"samples":94724},{"name":"loop + object.keys starting with {}","opsSec":1519765.0528807167,"samples":761739},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":825459.4884525877,"samples":412746},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":606857.5387882704,"samples":303429},{"name":"object.keys + reduce(FN, {})","opsSec":1553783.7680535968,"samples":776896},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":839812.7599696163,"samples":420268},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":603199.13863163,"samples":301600}]}-->
