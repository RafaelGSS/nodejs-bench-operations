## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,853|89|
|{...smallObject} - Total keys: 2|93,920,088|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,229|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,544|100|
|{ ...bigObject, ...anotherBigObject }|1,137|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,702,637|99|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,354,619|98|
|{ ...smallObject, ...anotherSmallObject }|23,040,012|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:09:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1853.4499249230576,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":93920087.72082373,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2228.9732765147237,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6544.396240695466,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1136.6917840343629,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13702637.072155174,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":34354618.72332732,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23040012.111174755,"samples":8}]}-->
