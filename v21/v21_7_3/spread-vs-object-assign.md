## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,779|890|
|{...smallObject} - Total keys: 2|10,726,574|5363288|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,218|1110|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,463|3232|
|{ ...bigObject, ...anotherBigObject }|1,100|551|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,191,153|3095577|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,813,106|4906554|
|{ ...smallObject, ...anotherSmallObject }|8,310,450|4155226|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:09:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1779.8359062487464,"samples":890},{"name":"{...smallObject} - Total keys: 2","opsSec":10726574.605534136,"samples":5363288},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2218.7998245490685,"samples":1110},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6463.414156139415,"samples":3232},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1100.166851384643,"samples":551},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6191153.54187579,"samples":3095577},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9813106.488774307,"samples":4906554},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8310450.554035654,"samples":4155226}]}-->
