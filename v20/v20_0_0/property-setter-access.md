## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|627,221,893|85|
|Setter|7,298,316|91|
|Method|610,881,110|88|
|DefineProperty (setter)|645,403,309|90|
|DefineProperty (setter & enumerable=false)|7,234,737|90|
|DefineProperty (setter & configurable=false)|7,368,636|89|
|DefineProperty (setter & enumerable=false & configurable=false)|7,262,257|90|
|DefineProperty (writable)|648,917,818|91|
|DefineProperty (writable & enumerable=false)|636,532,325|91|
|DefineProperty (writable & enumerable=false & configurable=false)|421,672,089|64|
|DefineProperties (setter)|69,969,435|83|
|DefineProperties (setter & enumerable=false)|7,316,082|89|
|DefineProperties (setter & enumerable=false & configurable=false)|7,200,436|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":627221893.3600446,"samples":6},{"name":"Setter","opsSec":7298316.078720093,"samples":5},{"name":"Method","opsSec":610881110.4660094,"samples":6},{"name":"DefineProperty (setter)","opsSec":645403309.3282573,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7234737.273389137,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":7368635.813282718,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7262256.713099092,"samples":5},{"name":"DefineProperty (writable)","opsSec":648917818.3182918,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":636532324.7839042,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":421672089.09814006,"samples":7},{"name":"DefineProperties (setter)","opsSec":69969435.49522248,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7316082.126856724,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7200435.751861312,"samples":6}]}-->
