## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,918|960|
|{...smallObject} - Total keys: 2|57,097,545|28549182|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,118|560|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,774|3388|
|{ ...bigObject, ...anotherBigObject }|1,192|597|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,877,333|6438694|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,346,483|14175030|
|{ ...smallObject, ...anotherSmallObject }|21,081,508|10540774|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:24:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1918.3912792778058,"samples":960},{"name":"{...smallObject} - Total keys: 2","opsSec":57097545.44958843,"samples":28549182},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1118.583428183715,"samples":560},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6774.754109169815,"samples":3388},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1192.8056460921791,"samples":597},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12877333.065297145,"samples":6438694},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28346483.410802126,"samples":14175030},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21081508.83055659,"samples":10540774}]}-->
