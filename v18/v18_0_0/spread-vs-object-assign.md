## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,156|84|
|{...smallObject} - Total keys: 2|62,078,689|83|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,265|88|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,434|86|
|{ ...bigObject, ...anotherBigObject }|751|81|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,546,960|85|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,910,077|88|
|{ ...smallObject, ...anotherSmallObject }|14,797,112|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1155.9877695495672,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":62078689.13469192,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1265.4071605488996,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3434.1086537724336,"samples":2},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":751.2581196065161,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8546960.268918786,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":20910076.52768359,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14797112.113156961,"samples":5}]}-->
