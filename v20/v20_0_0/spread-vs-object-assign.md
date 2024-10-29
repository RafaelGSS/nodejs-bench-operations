## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,849|926|
|{...smallObject} - Total keys: 2|53,440,588|26720467|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,075|538|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,657|3329|
|{ ...bigObject, ...anotherBigObject }|1,150|576|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,191,689|6595851|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,941,670|14485267|
|{ ...smallObject, ...anotherSmallObject }|21,002,248|10505953|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:23:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1849.9330032578716,"samples":926},{"name":"{...smallObject} - Total keys: 2","opsSec":53440588.02563312,"samples":26720467},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1075.3565689997915,"samples":538},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6657.2787903595245,"samples":3329},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1150.9977916928394,"samples":576},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13191689.045761358,"samples":6595851},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28941670.24073555,"samples":14485267},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21002248.536055665,"samples":10505953}]}-->
