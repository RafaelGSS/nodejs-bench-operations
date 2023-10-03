## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,354|95|
|{...smallObject} - Total keys: 2|69,718,653|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,552|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,507|97|
|{ ...bigObject, ...anotherBigObject }|824|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,884,523|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,175,547|99|
|{ ...smallObject, ...anotherSmallObject }|17,513,427|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:39 GMT+0000 (Coordinated Universal Time)
</details>

