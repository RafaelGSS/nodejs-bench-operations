## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,314|95|
|{...smallObject} - Total keys: 2|68,675,239|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,505|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,182|97|
|{ ...bigObject, ...anotherBigObject }|810|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,643,926|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,111,951|96|
|{ ...smallObject, ...anotherSmallObject }|17,206,502|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1313.5885973589468,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":68675239.21881333,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1505.470974770125,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4182.345604839226,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":809.5580125520062,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":10643926.325811096,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28111950.77710866,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":17206501.902118377,"samples":6}]}-->
