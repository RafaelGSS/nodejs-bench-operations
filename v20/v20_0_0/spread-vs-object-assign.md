## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,443|93|
|{...smallObject} - Total keys: 2|78,460,458|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|819|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,744|96|
|{ ...bigObject, ...anotherBigObject }|868|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,142,892|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,403,929|97|
|{ ...smallObject, ...anotherSmallObject }|18,679,538|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:41 GMT+0000 (Coordinated Universal Time)
</details>

