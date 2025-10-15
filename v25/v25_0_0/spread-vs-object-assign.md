## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,163|1582|
|{...smallObject} - Total keys: 2|40,667,620|20333904|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,077|539|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,534|3268|
|{ ...bigObject, ...anotherBigObject }|1,509|755|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,987,650|5995058|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,642,540|13322816|
|{ ...smallObject, ...anotherSmallObject }|20,982,005|10491122|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:42:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1582,"opsSec":3163.286647228184},{"name":"{...smallObject} - Total keys: 2","samples":20333904,"opsSec":40667620.19692993},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":539,"opsSec":1077.2386400463743},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3268,"opsSec":6534.376050726369},{"name":"{ ...bigObject, ...anotherBigObject }","samples":755,"opsSec":1509.1073509290666},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5995058,"opsSec":11987650.284188345},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13322816,"opsSec":26642540.825843222},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10491122,"opsSec":20982005.644415878}]}-->
