## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,947|92|
|{...smallObject} - Total keys: 2|94,642,835|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,166|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,102|98|
|{ ...bigObject, ...anotherBigObject }|1,159|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,988,088|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,647,224|98|
|{ ...smallObject, ...anotherSmallObject }|22,838,582|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:11:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1946.8189713798542,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":94642835.17455794,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2166.2948671899853,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6102.413005499711,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1158.5469127728777,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13988088.186680403,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":34647224.468104884,"samples":8},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22838581.61822566,"samples":6}]}-->
