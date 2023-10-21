## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,191|92|
|{...smallObject} - Total keys: 2|54,541,187|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,309|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,532|98|
|{ ...bigObject, ...anotherBigObject }|759|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,966,097|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,879,957|92|
|{ ...smallObject, ...anotherSmallObject }|12,661,170|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1191.3008901357862,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":54541186.74201997,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1309.4499126688686,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3531.716450633576,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":759.2190137488494,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7966096.671012347,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18879956.70990873,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12661170.24000228,"samples":7}]}-->
