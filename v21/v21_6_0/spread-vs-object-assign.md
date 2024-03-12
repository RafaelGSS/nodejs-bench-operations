## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,957|95|
|{...smallObject} - Total keys: 2|112,368,576|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,169|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,195|99|
|{ ...bigObject, ...anotherBigObject }|1,235|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,673,127|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,519,845|96|
|{ ...smallObject, ...anotherSmallObject }|24,385,893|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1957.4893655310743,"samples":7},{"name":"{...smallObject} - Total keys: 2","opsSec":112368576.01528081,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1169.378511929641,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6195.1268332622985,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1234.5635669647193,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14673126.590860235,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36519845.47170966,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24385893.29396752,"samples":5}]}-->
