## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,743|873|
|{...smallObject} - Total keys: 2|39,371,466|19695681|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,054|528|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,587|3294|
|{ ...bigObject, ...anotherBigObject }|1,106|554|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,258,776|6129390|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,602,889|14302242|
|{ ...smallObject, ...anotherSmallObject }|20,331,231|10169831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:53:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":873,"opsSec":1743.466022074992},{"name":"{...smallObject} - Total keys: 2","samples":19695681,"opsSec":39371466.810391374},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":528,"opsSec":1054.3891169597782},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3294,"opsSec":6587.020022683146},{"name":"{ ...bigObject, ...anotherBigObject }","samples":554,"opsSec":1106.1582575627406},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6129390,"opsSec":12258776.984340863},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14302242,"opsSec":28602889.846537292},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10169831,"opsSec":20331231.08575582}]}-->
