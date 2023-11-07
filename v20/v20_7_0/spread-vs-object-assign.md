## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,060|96|
|{...smallObject} - Total keys: 2|112,805,929|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,181|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,323|99|
|{ ...bigObject, ...anotherBigObject }|1,238|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,396,664|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|38,162,111|96|
|{ ...smallObject, ...anotherSmallObject }|25,855,699|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:17:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2059.6735158103165,"samples":7},{"name":"{...smallObject} - Total keys: 2","opsSec":112805929.22618034,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1181.07968244618,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6323.25643032839,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1238.1839630885197,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15396664.419805905,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":38162110.65117366,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25855698.779904045,"samples":7}]}-->
