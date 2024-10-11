## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,883|942|
|{...smallObject} - Total keys: 2|59,327,751|29664361|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,065|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,630|3316|
|{ ...bigObject, ...anotherBigObject }|1,127|564|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,489,543|6744772|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,143,705|14083750|
|{ ...smallObject, ...anotherSmallObject }|19,285,009|9666678|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:30:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1883.8986989991574,"samples":942},{"name":"{...smallObject} - Total keys: 2","opsSec":59327751.75394782,"samples":29664361},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1065.468976654849,"samples":533},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6630.694548857221,"samples":3316},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1127.5164307531784,"samples":564},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13489543.676250951,"samples":6744772},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28143705.84760373,"samples":14083750},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19285009.868779678,"samples":9666678}]}-->
