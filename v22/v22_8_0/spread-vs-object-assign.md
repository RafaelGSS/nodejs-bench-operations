## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,936|970|
|{...smallObject} - Total keys: 2|52,735,657|26367891|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,097|549|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,431|3216|
|{ ...bigObject, ...anotherBigObject }|1,174|588|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,081,967|6040993|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,988,313|13994163|
|{ ...smallObject, ...anotherSmallObject }|20,153,802|10078825|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:29:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1936.8894910596227,"samples":970},{"name":"{...smallObject} - Total keys: 2","opsSec":52735657.96573246,"samples":26367891},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1097.3993713760585,"samples":549},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6431.473146582778,"samples":3216},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1174.2935143164084,"samples":588},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12081967.997867683,"samples":6040993},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27988313.01342276,"samples":13994163},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20153802.034577537,"samples":10078825}]}-->
