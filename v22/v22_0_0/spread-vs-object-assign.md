## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,734|868|
|{...smallObject} - Total keys: 2|10,035,525|5017763|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,249|1125|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,761|3381|
|{ ...bigObject, ...anotherBigObject }|1,103|552|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,391,466|3195734|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,623,280|4811641|
|{ ...smallObject, ...anotherSmallObject }|8,020,389|4010195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:08:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1734.5170122376956,"samples":868},{"name":"{...smallObject} - Total keys: 2","opsSec":10035525.71899978,"samples":5017763},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2249.2204067114844,"samples":1125},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6761.662295538814,"samples":3381},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1103.121868661457,"samples":552},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6391466.696106172,"samples":3195734},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9623280.267785229,"samples":4811641},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8020389.454663285,"samples":4010195}]}-->
