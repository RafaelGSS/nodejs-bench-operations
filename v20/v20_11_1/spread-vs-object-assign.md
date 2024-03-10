## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,079|93|
|{...smallObject} - Total keys: 2|101,316,767|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,223|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,244|98|
|{ ...bigObject, ...anotherBigObject }|1,286|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,471,297|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,354,873|98|
|{ ...smallObject, ...anotherSmallObject }|24,835,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2078.7355995429475,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":101316767.23895232,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2222.8773183812455,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6244.0180014491925,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1286.4758909883863,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13471297.363249978,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37354873.35308287,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24835897.52919367,"samples":6}]}-->
