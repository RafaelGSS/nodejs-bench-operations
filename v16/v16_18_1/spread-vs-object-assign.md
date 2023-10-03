## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,503|83|
|{...smallObject} - Total keys: 2|71,764,077|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,466|90|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,865|89|
|{ ...bigObject, ...anotherBigObject }|900|86|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,156,429|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,213,686|93|
|{ ...smallObject, ...anotherSmallObject }|17,350,853|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:41 GMT+0000 (Coordinated Universal Time)
</details>

