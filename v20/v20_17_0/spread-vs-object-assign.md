## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|907|
|{...smallObject} - Total keys: 2|52,148,059|26074734|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,069|535|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,464|3233|
|{ ...bigObject, ...anotherBigObject }|1,160|581|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,878,431|6439350|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,175,390|13087698|
|{ ...smallObject, ...anotherSmallObject }|20,893,017|10446530|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:29:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.2426991866848,"samples":907},{"name":"{...smallObject} - Total keys: 2","opsSec":52148059.79379332,"samples":26074734},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1069.3795395748614,"samples":535},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6464.486172486072,"samples":3233},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1160.686629686924,"samples":581},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12878431.278652938,"samples":6439350},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":26175390.55551877,"samples":13087698},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20893017.3364586,"samples":10446530}]}-->
