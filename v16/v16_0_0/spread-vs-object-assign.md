## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,032|85|
|{...smallObject} - Total keys: 2|52,025,684|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,139|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,173|84|
|{ ...bigObject, ...anotherBigObject }|673|84|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,870,858|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,402,695|87|
|{ ...smallObject, ...anotherSmallObject }|12,275,599|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1032.430371377474,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":52025684.276068,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1139.4837337299039,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3173.352426561678,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":673.1667215485379,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7870858.095177052,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18402694.627249986,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12275599.074066337,"samples":5}]}-->
