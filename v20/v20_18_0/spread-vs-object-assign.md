## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,830|916|
|{...smallObject} - Total keys: 2|52,604,953|26302479|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,075|538|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,255|3128|
|{ ...bigObject, ...anotherBigObject }|1,132|568|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,083,950|6543279|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,966,563|13983293|
|{ ...smallObject, ...anotherSmallObject }|19,691,487|9848228|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:23:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1830.4969460086872,"samples":916},{"name":"{...smallObject} - Total keys: 2","opsSec":52604953.1603443,"samples":26302479},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1075.1030673134142,"samples":538},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6255.628253035436,"samples":3128},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1132.784062296231,"samples":568},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13083950.865782583,"samples":6543279},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27966563.123351365,"samples":13983293},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19691487.16827688,"samples":9848228}]}-->
