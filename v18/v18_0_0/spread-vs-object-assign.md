## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,340|93|
|{...smallObject} - Total keys: 2|74,784,796|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,608|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,649|98|
|{ ...bigObject, ...anotherBigObject }|826|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,170,223|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,846,646|93|
|{ ...smallObject, ...anotherSmallObject }|16,751,433|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:45 GMT+0000 (Coordinated Universal Time)
</details>

