## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,877|1940|
|{...smallObject} - Total keys: 2|56,771,373|28385690|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,083|542|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,703|3352|
|{ ...bigObject, ...anotherBigObject }|1,534|768|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,891,146|6447355|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,585,653|13292832|
|{ ...smallObject, ...anotherSmallObject }|20,369,758|10184993|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:27:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":3877.742293126611,"samples":1940},{"name":"{...smallObject} - Total keys: 2","opsSec":56771373.187435225,"samples":28385690},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1083.9382870575646,"samples":542},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6703.662980047342,"samples":3352},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1534.2662760395428,"samples":768},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12891146.268396396,"samples":6447355},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":26585653.418909937,"samples":13292832},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20369758.10314634,"samples":10184993}]}-->
