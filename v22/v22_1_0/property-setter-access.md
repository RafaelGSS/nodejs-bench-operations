## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|133,423,120|87|
|Setter|12,391,445|97|
|Method|130,757,144|86|
|DefineProperty (setter)|128,343,623|84|
|DefineProperty (setter & enumerable=false)|12,256,593|93|
|DefineProperty (setter & configurable=false)|12,273,146|94|
|DefineProperty (setter & enumerable=false & configurable=false)|12,289,122|93|
|DefineProperty (writable)|132,219,794|86|
|DefineProperty (writable & enumerable=false)|134,073,774|86|
|DefineProperty (writable & enumerable=false & configurable=false)|130,523,502|84|
|DefineProperties (setter)|130,849,542|83|
|DefineProperties (setter & enumerable=false)|12,177,957|93|
|DefineProperties (setter & enumerable=false & configurable=false)|12,336,862|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:11:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":133423119.61591464,"samples":5},{"name":"Setter","opsSec":12391445.43732084,"samples":5},{"name":"Method","opsSec":130757143.76061964,"samples":7},{"name":"DefineProperty (setter)","opsSec":128343623.11165553,"samples":4},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12256593.0702379,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12273145.86942852,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12289122.132710243,"samples":4},{"name":"DefineProperty (writable)","opsSec":132219794.37624323,"samples":5},{"name":"DefineProperty (writable & enumerable=false)","opsSec":134073773.86778498,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":130523501.64406703,"samples":5},{"name":"DefineProperties (setter)","opsSec":130849541.67121942,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12177956.79545833,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12336862.1262649,"samples":5}]}-->
