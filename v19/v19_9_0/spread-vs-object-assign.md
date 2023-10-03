## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,050|92|
|{...smallObject} - Total keys: 2|50,726,277|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,060|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,836|96|
|{ ...bigObject, ...anotherBigObject }|616|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,041,592|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,689,828|94|
|{ ...smallObject, ...anotherSmallObject }|9,632,249|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:47 GMT+0000 (Coordinated Universal Time)
</details>

