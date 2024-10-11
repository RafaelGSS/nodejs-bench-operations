## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,880|941|
|{...smallObject} - Total keys: 2|52,318,986|26159610|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,062|532|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,595|3298|
|{ ...bigObject, ...anotherBigObject }|1,156|579|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,126,658|6564725|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,381,113|13690559|
|{ ...smallObject, ...anotherSmallObject }|20,503,551|10254837|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:54:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1880.9753311644467,"samples":941},{"name":"{...smallObject} - Total keys: 2","opsSec":52318986.13413198,"samples":26159610},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1062.315755734334,"samples":532},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6595.191086622844,"samples":3298},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1156.7479452780146,"samples":579},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13126658.852274923,"samples":6564725},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27381113.399972953,"samples":13690559},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20503551.63948045,"samples":10254837}]}-->
