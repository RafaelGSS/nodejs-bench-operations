## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,127|80|
|{...smallObject} - Total keys: 2|58,392,893|85|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,206|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,171|83|
|{ ...bigObject, ...anotherBigObject }|747|81|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,898,753|82|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,836,130|87|
|{ ...smallObject, ...anotherSmallObject }|13,781,999|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1127.423931383736,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":58392892.69958252,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1206.369680743507,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3170.5005598445414,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":746.9290753107937,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8898752.95286418,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":22836130.12847688,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13781999.289870199,"samples":5}]}-->
