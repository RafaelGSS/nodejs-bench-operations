## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,125|96|
|{...smallObject} - Total keys: 2|116,593,277|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,248|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,690|99|
|{ ...bigObject, ...anotherBigObject }|1,273|98|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,591,106|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|39,848,603|99|
|{ ...smallObject, ...anotherSmallObject }|26,686,790|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:20:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2125.0445692050484,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":116593277.19606233,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2247.7755772054884,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6690.003839472226,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1273.0229154486835,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14591106.098192265,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":39848603.131306134,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":26686789.945705038,"samples":7}]}-->
