## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|89,297,418|44649013|
|Setter|10,721,952|5360981|
|Method|91,975,147|45999962|
|DefineProperty (setter)|96,188,512|48103710|
|DefineProperty (setter & enumerable=false)|10,769,023|5387339|
|DefineProperty (setter & configurable=false)|10,908,089|5454328|
|DefineProperty (setter & enumerable=false & configurable=false)|10,604,434|5302220|
|DefineProperty (writable)|95,794,590|47897308|
|DefineProperty (writable & enumerable=false)|96,095,298|48047670|
|DefineProperty (writable & enumerable=false & configurable=false)|95,364,131|47682088|
|DefineProperties (setter)|96,155,808|48097364|
|DefineProperties (setter & enumerable=false)|10,561,662|5281329|
|DefineProperties (setter & enumerable=false & configurable=false)|10,726,585|5363295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:51:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":44649013,"opsSec":89297418.95614593},{"name":"Setter","samples":5360981,"opsSec":10721952.521793969},{"name":"Method","samples":45999962,"opsSec":91975147.36690171},{"name":"DefineProperty (setter)","samples":48103710,"opsSec":96188512.2241521},{"name":"DefineProperty (setter & enumerable=false)","samples":5387339,"opsSec":10769023.422719246},{"name":"DefineProperty (setter & configurable=false)","samples":5454328,"opsSec":10908089.630170222},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5302220,"opsSec":10604434.125143494},{"name":"DefineProperty (writable)","samples":47897308,"opsSec":95794590.71022804},{"name":"DefineProperty (writable & enumerable=false)","samples":48047670,"opsSec":96095298.29464054},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47682088,"opsSec":95364131.75104287},{"name":"DefineProperties (setter)","samples":48097364,"opsSec":96155808.5518654},{"name":"DefineProperties (setter & enumerable=false)","samples":5281329,"opsSec":10561662.288726067},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5363295,"opsSec":10726585.816631531}]}-->
