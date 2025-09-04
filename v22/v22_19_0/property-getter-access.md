## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,985,154|48994021|
|Getter|47,274,427|23793327|
|Method|98,603,605|49301810|
|DefineProperty (getter)|97,851,295|49222911|
|DefineProperty (getter & enumerable=false)|51,711,784|25855901|
|DefineProperty (getter & configurable=false)|98,504,973|49264340|
|DefineProperty (getter & enumerable=false & configurable=false)|49,244,569|24623368|
|DefineProperty (writable)|93,124,821|46562416|
|DefineProperty (writable & enumerable=false)|93,359,713|46697924|
|DefineProperty (writable & enumerable=false & configurable=false)|99,001,499|49500757|
|DefineProperties (getter)|51,129,112|25648996|
|DefineProperties (getter & enumerable=false)|51,222,342|25611375|
|DefineProperties (getter & enumerable=false & configurable=false)|49,377,744|24694184|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:54:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":48994021,"opsSec":97985154.57346503},{"name":"Getter","samples":23793327,"opsSec":47274427.58474631},{"name":"Method","samples":49301810,"opsSec":98603605.99828795},{"name":"DefineProperty (getter)","samples":49222911,"opsSec":97851295.92202143},{"name":"DefineProperty (getter & enumerable=false)","samples":25855901,"opsSec":51711784.4179933},{"name":"DefineProperty (getter & configurable=false)","samples":49264340,"opsSec":98504973.98996952},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24623368,"opsSec":49244569.63289271},{"name":"DefineProperty (writable)","samples":46562416,"opsSec":93124821.01127112},{"name":"DefineProperty (writable & enumerable=false)","samples":46697924,"opsSec":93359713.68297729},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49500757,"opsSec":99001499.3477781},{"name":"DefineProperties (getter)","samples":25648996,"opsSec":51129112.8470409},{"name":"DefineProperties (getter & enumerable=false)","samples":25611375,"opsSec":51222342.67993101},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24694184,"opsSec":49377744.575765505}]}-->
