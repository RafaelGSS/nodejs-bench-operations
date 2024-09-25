## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,738|870|
|{...smallObject} - Total keys: 2|11,323,178|5661590|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,156|1079|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,091|3046|
|{ ...bigObject, ...anotherBigObject }|1,073|537|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,072,913|3036457|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,237,926|4618964|
|{ ...smallObject, ...anotherSmallObject }|7,684,843|3842422|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:02:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1738.1146635481819,"samples":870},{"name":"{...smallObject} - Total keys: 2","opsSec":11323178.410957105,"samples":5661590},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2156.6708179571747,"samples":1079},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6091.846388397672,"samples":3046},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1073.1230374320862,"samples":537},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6072913.097078909,"samples":3036457},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9237926.595394291,"samples":4618964},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7684843.363135452,"samples":3842422}]}-->
