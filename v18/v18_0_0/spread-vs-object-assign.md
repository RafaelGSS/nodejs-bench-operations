## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,739|870|
|{...smallObject} - Total keys: 2|12,639,961|6319981|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,200|1101|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,419|3210|
|{ ...bigObject, ...anotherBigObject }|1,082|542|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,603,794|3301898|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,574,030|5287016|
|{ ...smallObject, ...anotherSmallObject }|8,761,964|4380983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:03:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1739.6762810094544,"samples":870},{"name":"{...smallObject} - Total keys: 2","opsSec":12639961.190659624,"samples":6319981},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2200.483048593051,"samples":1101},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6419.039455524987,"samples":3210},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1082.5083382486916,"samples":542},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6603794.422826601,"samples":3301898},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10574030.195483075,"samples":5287016},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8761964.296897817,"samples":4380983}]}-->
