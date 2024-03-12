## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,037|94|
|{...smallObject} - Total keys: 2|101,952,047|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,185|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,131|98|
|{ ...bigObject, ...anotherBigObject }|1,260|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,472,836|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,368,050|96|
|{ ...smallObject, ...anotherSmallObject }|24,783,845|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:20:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2037.1889790563246,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":101952047.33709577,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2185.0636150872483,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6130.609812015646,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1260.3239715946236,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13472835.911090765,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37368049.985463925,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24783845.206063114,"samples":5}]}-->
