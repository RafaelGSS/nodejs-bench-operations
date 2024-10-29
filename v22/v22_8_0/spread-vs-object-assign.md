## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,855|928|
|{...smallObject} - Total keys: 2|52,273,168|26157440|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,064|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,373|3187|
|{ ...bigObject, ...anotherBigObject }|1,138|570|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,931,762|6467517|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,350,400|14177346|
|{ ...smallObject, ...anotherSmallObject }|20,482,600|10242662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:26:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1855.8503590738471,"samples":928},{"name":"{...smallObject} - Total keys: 2","opsSec":52273168.31170666,"samples":26157440},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1064.519166548759,"samples":533},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6373.982012622761,"samples":3187},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1138.1493145833203,"samples":570},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12931762.00557735,"samples":6467517},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28350400.656553417,"samples":14177346},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20482600.510540515,"samples":10242662}]}-->
