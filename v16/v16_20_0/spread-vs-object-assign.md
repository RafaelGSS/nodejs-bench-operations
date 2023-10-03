## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,099|91|
|{...smallObject} - Total keys: 2|47,940,986|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,117|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,975|92|
|{ ...bigObject, ...anotherBigObject }|677|92|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,703,427|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,663,758|92|
|{ ...smallObject, ...anotherSmallObject }|10,463,930|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:42 GMT+0000 (Coordinated Universal Time)
</details>

