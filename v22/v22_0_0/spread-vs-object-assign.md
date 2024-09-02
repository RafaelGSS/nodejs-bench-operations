## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,861|931|
|{...smallObject} - Total keys: 2|10,842,120|5421061|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,293|1147|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,707|3354|
|{ ...bigObject, ...anotherBigObject }|1,135|568|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,542,036|3271019|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,108,917|5054459|
|{ ...smallObject, ...anotherSmallObject }|8,165,703|4082852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:29:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1861.126428199456,"samples":931},{"name":"{...smallObject} - Total keys: 2","opsSec":10842120.807409221,"samples":5421061},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2293.6946725397593,"samples":1147},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6707.80067099606,"samples":3354},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1135.420519970902,"samples":568},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6542036.62625181,"samples":3271019},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10108917.656354642,"samples":5054459},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8165703.738723296,"samples":4082852}]}-->
