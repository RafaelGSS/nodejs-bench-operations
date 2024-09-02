## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,825|913|
|{...smallObject} - Total keys: 2|10,841,053|5420527|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,317|1159|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,695|3348|
|{ ...bigObject, ...anotherBigObject }|1,121|561|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,640,568|3320285|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,323,441|5161721|
|{ ...smallObject, ...anotherSmallObject }|8,734,394|4367343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:31:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1825.9342663663374,"samples":913},{"name":"{...smallObject} - Total keys: 2","opsSec":10841053.457995102,"samples":5420527},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2317.9060367249795,"samples":1159},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6695.725542209918,"samples":3348},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1121.3134735831484,"samples":561},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6640568.207102266,"samples":3320285},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10323441.256733686,"samples":5161721},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8734394.323602227,"samples":4367343}]}-->
