## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|562,188,253|85|
|Setter|4,939,173|89|
|Method|560,023,084|91|
|DefineProperty (setter)|562,737,144|90|
|DefineProperty (setter & enumerable=false)|4,906,039|84|
|DefineProperty (setter & configurable=false)|4,919,820|87|
|DefineProperty (setter & enumerable=false & configurable=false)|4,981,726|86|
|DefineProperty (writable)|693,900,688|86|
|DefineProperty (writable & enumerable=false)|695,300,345|89|
|DefineProperty (writable & enumerable=false & configurable=false)|467,939,174|64|
|DefineProperties (setter)|55,720,946|79|
|DefineProperties (setter & enumerable=false)|4,489,649|90|
|DefineProperties (setter & enumerable=false & configurable=false)|4,915,002|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":562188252.6703551,"samples":7},{"name":"Setter","opsSec":4939172.590196888,"samples":5},{"name":"Method","opsSec":560023083.8890586,"samples":7},{"name":"DefineProperty (setter)","opsSec":562737143.5025203,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":4906039.470957142,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":4919820.273797138,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":4981725.642598522,"samples":5},{"name":"DefineProperty (writable)","opsSec":693900688.4755547,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":695300344.9821886,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":467939173.59598184,"samples":7},{"name":"DefineProperties (setter)","opsSec":55720945.56394753,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":4489649.473982656,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":4915002.233198916,"samples":6}]}-->
