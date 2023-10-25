## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|982|90|
|{...smallObject} - Total keys: 2|49,838,671|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,068|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,862|97|
|{ ...bigObject, ...anotherBigObject }|627|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,929,490|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,118,935|93|
|{ ...smallObject, ...anotherSmallObject }|9,283,777|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":981.6198663896662,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":49838671.10514329,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1067.815861367222,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":2861.8272452678893,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":626.5750259089613,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6929489.567938078,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":16118934.877914494,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9283777.184729917,"samples":7}]}-->
