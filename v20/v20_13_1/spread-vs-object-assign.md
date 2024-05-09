## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,283|1142|
|{...smallObject} - Total keys: 2|15,399,434|7699718|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,539|1270|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,798|3400|
|{ ...bigObject, ...anotherBigObject }|1,373|687|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,746,286|3873144|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|12,923,066|6461534|
|{ ...smallObject, ...anotherSmallObject }|11,314,583|5657293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:41:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2283.77413017096,"samples":1142},{"name":"{...smallObject} - Total keys: 2","opsSec":15399434.18286821,"samples":7699718},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2539.6539010455717,"samples":1270},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6798.217942341347,"samples":3400},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1373.5911560867717,"samples":687},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7746286.109933562,"samples":3873144},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":12923066.087390792,"samples":6461534},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11314583.986116484,"samples":5657293}]}-->
