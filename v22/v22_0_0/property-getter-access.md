## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|93,113,018|46598296|
|Getter|50,651,277|25332638|
|Method|96,451,998|48226008|
|DefineProperty (getter)|94,832,201|47458619|
|DefineProperty (getter & enumerable=false)|50,662,206|25331119|
|DefineProperty (getter & configurable=false)|94,955,630|47477824|
|DefineProperty (getter & enumerable=false & configurable=false)|51,022,228|25511121|
|DefineProperty (writable)|94,990,091|47495325|
|DefineProperty (writable & enumerable=false)|95,166,036|47583028|
|DefineProperty (writable & enumerable=false & configurable=false)|94,817,222|47408622|
|DefineProperties (getter)|51,014,904|25518198|
|DefineProperties (getter & enumerable=false)|50,950,801|25475425|
|DefineProperties (getter & enumerable=false & configurable=false)|49,225,220|24613637|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:14:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":46598296,"opsSec":93113018.22426677},{"name":"Getter","samples":25332638,"opsSec":50651277.30388641},{"name":"Method","samples":48226008,"opsSec":96451998.44573629},{"name":"DefineProperty (getter)","samples":47458619,"opsSec":94832201.39601499},{"name":"DefineProperty (getter & enumerable=false)","samples":25331119,"opsSec":50662206.89340497},{"name":"DefineProperty (getter & configurable=false)","samples":47477824,"opsSec":94955630.14834154},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25511121,"opsSec":51022228.93830939},{"name":"DefineProperty (writable)","samples":47495325,"opsSec":94990091.83822037},{"name":"DefineProperty (writable & enumerable=false)","samples":47583028,"opsSec":95166036.77646056},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47408622,"opsSec":94817222.38167329},{"name":"DefineProperties (getter)","samples":25518198,"opsSec":51014904.33907022},{"name":"DefineProperties (getter & enumerable=false)","samples":25475425,"opsSec":50950801.90244301},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24613637,"opsSec":49225220.32380809}]}-->
