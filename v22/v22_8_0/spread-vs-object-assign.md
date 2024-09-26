## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,854|929|
|{...smallObject} - Total keys: 2|53,367,080|26683548|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,066|534|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,434|3218|
|{ ...bigObject, ...anotherBigObject }|1,130|566|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,414,408|6207317|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,872,642|13936329|
|{ ...smallObject, ...anotherSmallObject }|20,538,869|10275837|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:41:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1854.9984714932402,"samples":929},{"name":"{...smallObject} - Total keys: 2","opsSec":53367080.3100784,"samples":26683548},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1066.9522720739642,"samples":534},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6434.100820724344,"samples":3218},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1130.223762938641,"samples":566},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12414408.00811662,"samples":6207317},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27872642.781537037,"samples":13936329},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20538869.781034324,"samples":10275837}]}-->
