## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,443|94|
|{...smallObject} - Total keys: 2|77,105,934|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,568|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,430|96|
|{ ...bigObject, ...anotherBigObject }|840|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,245,673|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,692,882|93|
|{ ...smallObject, ...anotherSmallObject }|16,584,899|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:45 GMT+0000 (Coordinated Universal Time)
</details>

