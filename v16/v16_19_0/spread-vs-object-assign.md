## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|927|82|
|{...smallObject} - Total keys: 2|44,392,864|83|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,004|84|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,822|87|
|{ ...bigObject, ...anotherBigObject }|605|84|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,945,078|83|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,988,987|85|
|{ ...smallObject, ...anotherSmallObject }|11,418,300|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:46 GMT+0000 (Coordinated Universal Time)
</details>

