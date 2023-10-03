## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,212|94|
|{...smallObject} - Total keys: 2|62,971,703|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,329|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,642|98|
|{ ...bigObject, ...anotherBigObject }|766|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,072,081|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,099,651|95|
|{ ...smallObject, ...anotherSmallObject }|12,014,950|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:42 GMT+0000 (Coordinated Universal Time)
</details>

