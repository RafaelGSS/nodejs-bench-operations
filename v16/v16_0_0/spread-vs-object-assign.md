## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|964|90|
|{...smallObject} - Total keys: 2|45,730,729|83|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,027|87|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,791|85|
|{ ...bigObject, ...anotherBigObject }|621|89|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,144,883|85|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,717,483|86|
|{ ...smallObject, ...anotherSmallObject }|11,311,927|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:48 GMT+0000 (Coordinated Universal Time)
</details>

