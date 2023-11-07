## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,932|90|
|{...smallObject} - Total keys: 2|107,739,221|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,163|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,154|99|
|{ ...bigObject, ...anotherBigObject }|1,182|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,271,488|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|35,951,201|99|
|{ ...smallObject, ...anotherSmallObject }|23,665,508|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:15:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1932.117256271365,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":107739221.33942808,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2162.8635141079476,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6154.080735216951,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1181.5337930535807,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14271488.364398675,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":35951200.77872754,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23665507.51499659,"samples":8}]}-->
