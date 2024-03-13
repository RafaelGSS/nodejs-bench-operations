## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,130|91|
|{...smallObject} - Total keys: 2|103,504,067|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,231|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,209|98|
|{ ...bigObject, ...anotherBigObject }|1,296|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,593,774|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,326,323|97|
|{ ...smallObject, ...anotherSmallObject }|24,955,454|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:15:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2130.245259055448,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":103504067.29540017,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2230.5759285649738,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6209.104669218487,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1295.9007186494339,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13593774.053798413,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37326323.01597121,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24955453.81897754,"samples":5}]}-->
