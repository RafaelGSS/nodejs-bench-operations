## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,217|1109|
|{...smallObject} - Total keys: 2|12,312,290|6156146|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,531|1266|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,730|3366|
|{ ...bigObject, ...anotherBigObject }|1,343|673|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,234,935|3617468|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,859,995|5429998|
|{ ...smallObject, ...anotherSmallObject }|9,152,054|4576028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:45:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2217.2262146577905,"samples":1109},{"name":"{...smallObject} - Total keys: 2","opsSec":12312290.793415507,"samples":6156146},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2531.7835628868525,"samples":1266},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6730.546551933528,"samples":3366},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1343.3618871190156,"samples":673},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7234935.855305985,"samples":3617468},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10859995.326715302,"samples":5429998},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9152054.773601871,"samples":4576028}]}-->
