## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,336|1169|
|{...smallObject} - Total keys: 2|15,329,380|7664691|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,528|1265|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,825|3413|
|{ ...bigObject, ...anotherBigObject }|1,361|681|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,851,441|3925721|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|13,005,340|6502671|
|{ ...smallObject, ...anotherSmallObject }|11,358,535|5679268|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:40:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2336.5860850282484,"samples":1169},{"name":"{...smallObject} - Total keys: 2","opsSec":15329380.22179567,"samples":7664691},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2528.6191008800834,"samples":1265},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6825.816603959106,"samples":3413},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1361.9773285253943,"samples":681},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7851441.13637026,"samples":3925721},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":13005340.465357477,"samples":6502671},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11358535.636503803,"samples":5679268}]}-->
