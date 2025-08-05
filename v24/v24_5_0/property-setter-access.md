## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|89,640,828|44825092|
|Setter|10,652,405|5326206|
|Method|86,468,376|43995154|
|DefineProperty (setter)|89,784,356|44967386|
|DefineProperty (setter & enumerable=false)|10,635,296|5322117|
|DefineProperty (setter & configurable=false)|10,642,531|5321268|
|DefineProperty (setter & enumerable=false & configurable=false)|10,657,902|5329338|
|DefineProperty (writable)|89,084,186|44542119|
|DefineProperty (writable & enumerable=false)|90,034,267|45017145|
|DefineProperty (writable & enumerable=false & configurable=false)|90,291,475|45145762|
|DefineProperties (setter)|91,596,796|45808531|
|DefineProperties (setter & enumerable=false)|10,413,976|5206989|
|DefineProperties (setter & enumerable=false & configurable=false)|10,336,479|5168242|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:36:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":44825092,"opsSec":89640828.3660251},{"name":"Setter","samples":5326206,"opsSec":10652405.416813452},{"name":"Method","samples":43995154,"opsSec":86468376.88783985},{"name":"DefineProperty (setter)","samples":44967386,"opsSec":89784356.44721268},{"name":"DefineProperty (setter & enumerable=false)","samples":5322117,"opsSec":10635296.670983726},{"name":"DefineProperty (setter & configurable=false)","samples":5321268,"opsSec":10642531.359856326},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5329338,"opsSec":10657902.982296694},{"name":"DefineProperty (writable)","samples":44542119,"opsSec":89084186.68750848},{"name":"DefineProperty (writable & enumerable=false)","samples":45017145,"opsSec":90034267.85157011},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45145762,"opsSec":90291475.96493478},{"name":"DefineProperties (setter)","samples":45808531,"opsSec":91596796.02568573},{"name":"DefineProperties (setter & enumerable=false)","samples":5206989,"opsSec":10413976.250451991},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5168242,"opsSec":10336479.183200702}]}-->
