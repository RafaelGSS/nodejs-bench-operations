## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,771|886|
|{...smallObject} - Total keys: 2|13,541,702|6770852|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,136|1069|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,675|3338|
|{ ...bigObject, ...anotherBigObject }|1,083|542|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,050,592|3525297|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,206,687|5603344|
|{ ...smallObject, ...anotherSmallObject }|9,423,319|4711660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:05:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1771.662395557198,"samples":886},{"name":"{...smallObject} - Total keys: 2","opsSec":13541702.266833456,"samples":6770852},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2136.7710233249845,"samples":1069},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6675.726188415075,"samples":3338},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1083.8758485248736,"samples":542},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7050592.491133247,"samples":3525297},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11206687.574335877,"samples":5603344},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9423319.453463878,"samples":4711660}]}-->
