## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,186|1094|
|{...smallObject} - Total keys: 2|13,567,651|6783826|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,435|1218|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,504|3253|
|{ ...bigObject, ...anotherBigObject }|1,299|650|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,552,010|3276006|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,787,125|5393563|
|{ ...smallObject, ...anotherSmallObject }|9,372,528|4686265|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:39:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2186.315096659777,"samples":1094},{"name":"{...smallObject} - Total keys: 2","opsSec":13567651.165426731,"samples":6783826},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2435.5788693446502,"samples":1218},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6504.608027926244,"samples":3253},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1299.2806831148512,"samples":650},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6552010.222306338,"samples":3276006},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10787125.91770076,"samples":5393563},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9372528.239147127,"samples":4686265}]}-->
