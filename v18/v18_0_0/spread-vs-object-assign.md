## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|907|
|{...smallObject} - Total keys: 2|58,399,407|29206457|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,078|540|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,426|3214|
|{ ...bigObject, ...anotherBigObject }|1,136|569|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,929,492|5969253|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,552,419|13776218|
|{ ...smallObject, ...anotherSmallObject }|19,758,675|9889581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:22:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.0266440116827,"samples":907},{"name":"{...smallObject} - Total keys: 2","opsSec":58399407.73537541,"samples":29206457},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1078.6325635675373,"samples":540},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6426.860928876409,"samples":3214},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1136.910464594465,"samples":569},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":11929492.624129869,"samples":5969253},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27552419.57875793,"samples":13776218},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19758675.53341199,"samples":9889581}]}-->
