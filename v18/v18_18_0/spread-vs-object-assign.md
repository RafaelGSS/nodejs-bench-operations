## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,089|95|
|{...smallObject} - Total keys: 2|104,651,517|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,225|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,924|98|
|{ ...bigObject, ...anotherBigObject }|1,258|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,320,416|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,315,845|100|
|{ ...smallObject, ...anotherSmallObject }|22,848,705|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2089.1832947539833,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":104651517.31435445,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2224.7177467567603,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5924.009098910427,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1257.5640535667508,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13320415.69124889,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33315844.852006808,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22848705.45441844,"samples":6}]}-->
