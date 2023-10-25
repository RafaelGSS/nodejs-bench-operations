## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,560,740|93|
|{ ...object, __proto__: null }|1,833,391|86|
|{ ...object, newProp: true }|22,955,145|94|
|structuredClone|190,487|95|
|JSON.parse + JSON.stringify|194,712|95|
|loop + object.keys starting with {}|1,158,899|95|
|loop + object.keys starting with { __proto__: null }|620,694|92|
|loop + object.keys starting with { randomProp: true }|448,474|99|
|object.keys + reduce(FN, {})|429,893|91|
|object.keys + reduce(FN, { __proto__: null })|627,623|96|
|object.keys + reduce(FN, { newProp: true })|451,289|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":24560740.114840984,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":1833390.9214714998,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":22955144.658031773,"samples":7},{"name":"structuredClone","opsSec":190487.33197297703,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":194711.79166008852,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1158899.121275618,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":620693.6633310496,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":448473.5348311612,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":429893.2404082583,"samples":3},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":627623.1758068737,"samples":8},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":451288.62521930283,"samples":4}]}-->
