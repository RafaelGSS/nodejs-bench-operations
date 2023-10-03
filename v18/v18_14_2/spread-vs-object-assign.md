## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,126|82|
|{...smallObject} - Total keys: 2|60,133,475|87|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,262|86|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,381|85|
|{ ...bigObject, ...anotherBigObject }|663|79|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,657,190|84|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,224,763|83|
|{ ...smallObject, ...anotherSmallObject }|12,262,226|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:47 GMT+0000 (Coordinated Universal Time)
</details>

