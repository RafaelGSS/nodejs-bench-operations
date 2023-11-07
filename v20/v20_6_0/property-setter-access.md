## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|842,348,268|95|
|Setter|12,586,217|98|
|Method|846,057,702|98|
|DefineProperty (setter)|816,594,055|95|
|DefineProperty (setter & enumerable=false)|12,981,205|92|
|DefineProperty (setter & configurable=false)|12,788,339|98|
|DefineProperty (setter & enumerable=false & configurable=false)|12,237,240|98|
|DefineProperty (writable)|849,217,688|100|
|DefineProperty (writable & enumerable=false)|848,551,246|98|
|DefineProperty (writable & enumerable=false & configurable=false)|842,929,220|98|
|DefineProperties (setter)|849,542,858|100|
|DefineProperties (setter & enumerable=false)|12,277,567|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,837,170|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:25:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":842348268.2663552,"samples":6},{"name":"Setter","opsSec":12586216.82179452,"samples":5},{"name":"Method","opsSec":846057702.4922757,"samples":8},{"name":"DefineProperty (setter)","opsSec":816594054.8014921,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12981204.829138659,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12788338.843347732,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12237240.04349838,"samples":5},{"name":"DefineProperty (writable)","opsSec":849217687.8946607,"samples":5},{"name":"DefineProperty (writable & enumerable=false)","opsSec":848551245.5939039,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":842929219.6560957,"samples":12},{"name":"DefineProperties (setter)","opsSec":849542858.0172374,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12277566.508969331,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11837170.122609384,"samples":4}]}-->
