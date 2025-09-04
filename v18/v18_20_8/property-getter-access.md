## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|104,360,100|52180062|
|Getter|56,898,007|28449119|
|Method|100,502,422|50256675|
|DefineProperty (getter)|104,908,669|52457002|
|DefineProperty (getter & enumerable=false)|57,247,702|28628625|
|DefineProperty (getter & configurable=false)|102,658,512|51333695|
|DefineProperty (getter & enumerable=false & configurable=false)|56,969,247|28485278|
|DefineProperty (writable)|105,233,946|52616984|
|DefineProperty (writable & enumerable=false)|105,095,780|52547903|
|DefineProperty (writable & enumerable=false & configurable=false)|103,621,271|51810649|
|DefineProperties (getter)|56,906,138|28453080|
|DefineProperties (getter & enumerable=false)|56,916,518|28458267|
|DefineProperties (getter & enumerable=false & configurable=false)|56,797,802|28398914|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:51:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":52180062,"opsSec":104360100.62333745},{"name":"Getter","samples":28449119,"opsSec":56898007.10788716},{"name":"Method","samples":50256675,"opsSec":100502422.17063254},{"name":"DefineProperty (getter)","samples":52457002,"opsSec":104908669.60396796},{"name":"DefineProperty (getter & enumerable=false)","samples":28628625,"opsSec":57247702.57165132},{"name":"DefineProperty (getter & configurable=false)","samples":51333695,"opsSec":102658512.50247285},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":28485278,"opsSec":56969247.75819448},{"name":"DefineProperty (writable)","samples":52616984,"opsSec":105233946.32180706},{"name":"DefineProperty (writable & enumerable=false)","samples":52547903,"opsSec":105095780.14643809},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51810649,"opsSec":103621271.4729545},{"name":"DefineProperties (getter)","samples":28453080,"opsSec":56906138.94472859},{"name":"DefineProperties (getter & enumerable=false)","samples":28458267,"opsSec":56916518.29104096},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":28398914,"opsSec":56797802.440988906}]}-->
