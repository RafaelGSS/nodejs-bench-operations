## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,889|945|
|{...smallObject} - Total keys: 2|55,317,885|27659719|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,084|543|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,269|3135|
|{ ...bigObject, ...anotherBigObject }|1,180|591|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,447,778|6223945|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,183,549|13592794|
|{ ...smallObject, ...anotherSmallObject }|20,008,411|10008033|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:28:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1889.7611493088164,"samples":945},{"name":"{...smallObject} - Total keys: 2","opsSec":55317885.89075767,"samples":27659719},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1084.415690364691,"samples":543},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6269.822538942858,"samples":3135},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1180.8756717406764,"samples":591},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12447778.592381598,"samples":6223945},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27183549.66871164,"samples":13592794},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20008411.102046933,"samples":10008033}]}-->
