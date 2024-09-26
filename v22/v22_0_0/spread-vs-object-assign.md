## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,749|890|
|{...smallObject} - Total keys: 2|53,353,374|26676816|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,093|547|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,811|3406|
|{ ...bigObject, ...anotherBigObject }|1,168|585|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,426,570|6715527|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,741,919|13873044|
|{ ...smallObject, ...anotherSmallObject }|20,761,434|10381057|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:41:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1749.8778752366252,"samples":890},{"name":"{...smallObject} - Total keys: 2","opsSec":53353374.94343952,"samples":26676816},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1093.29053534606,"samples":547},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6811.265296057575,"samples":3406},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1168.3706510453262,"samples":585},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13426570.062661873,"samples":6715527},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27741919.33274955,"samples":13873044},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20761434.22912047,"samples":10381057}]}-->
