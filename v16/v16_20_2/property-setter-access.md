## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|555,390,546|87|
|Setter|5,780,797|82|
|Method|620,319,141|87|
|DefineProperty (setter)|594,053,858|88|
|DefineProperty (setter & enumerable=false)|5,509,065|86|
|DefineProperty (setter & configurable=false)|5,401,772|86|
|DefineProperty (setter & enumerable=false & configurable=false)|5,410,975|85|
|DefineProperty (writable)|703,634,840|88|
|DefineProperty (writable & enumerable=false)|544,997,972|73|
|DefineProperty (writable & enumerable=false & configurable=false)|68,186,270|78|
|DefineProperties (setter)|54,687,385|81|
|DefineProperties (setter & enumerable=false)|4,770,851|85|
|DefineProperties (setter & enumerable=false & configurable=false)|5,301,620|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":555390545.8856165,"samples":6},{"name":"Setter","opsSec":5780797.203422049,"samples":4},{"name":"Method","opsSec":620319140.987456,"samples":11},{"name":"DefineProperty (setter)","opsSec":594053857.969352,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5509064.936135608,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5401771.889312664,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5410974.8242252795,"samples":5},{"name":"DefineProperty (writable)","opsSec":703634839.8856195,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":544997972.251475,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":68186270.01476835,"samples":5},{"name":"DefineProperties (setter)","opsSec":54687384.94880025,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":4770851.274096002,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5301620.311648539,"samples":5}]}-->
