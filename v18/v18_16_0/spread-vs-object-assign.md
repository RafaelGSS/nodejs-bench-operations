## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,068|90|
|{...smallObject} - Total keys: 2|49,885,755|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,115|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,036|94|
|{ ...bigObject, ...anotherBigObject }|680|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,254,985|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|13,850,180|94|
|{ ...smallObject, ...anotherSmallObject }|8,899,171|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:45 GMT+0000 (Coordinated Universal Time)
</details>

