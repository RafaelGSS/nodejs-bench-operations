## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,029|90|
|{...smallObject} - Total keys: 2|105,170,489|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,222|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,889|97|
|{ ...bigObject, ...anotherBigObject }|1,243|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,390,017|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,422,935|99|
|{ ...smallObject, ...anotherSmallObject }|22,507,265|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2028.5241499679703,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":105170488.73180825,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2221.7810802172667,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5888.508725912553,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1242.7417584741997,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13390017.493523939,"samples":8},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33422935.486697406,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22507264.788753845,"samples":5}]}-->
