## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,385|89|
|{...smallObject} - Total keys: 2|70,975,486|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,519|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,528|95|
|{ ...bigObject, ...anotherBigObject }|828|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,054,160|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,165,969|97|
|{ ...smallObject, ...anotherSmallObject }|17,674,280|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:41 GMT+0000 (Coordinated Universal Time)
</details>

