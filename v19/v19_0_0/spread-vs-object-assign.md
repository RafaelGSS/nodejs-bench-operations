## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,076|93|
|{...smallObject} - Total keys: 2|55,634,144|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,097|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,026|97|
|{ ...bigObject, ...anotherBigObject }|668|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,664,386|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,100,112|96|
|{ ...smallObject, ...anotherSmallObject }|9,761,732|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1076.1363962495363,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":55634144.48572687,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1097.3986759375014,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3026.1950249166607,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":667.6253736717302,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6664385.602865921,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":15100112.18323869,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9761732.230987268,"samples":6}]}-->
