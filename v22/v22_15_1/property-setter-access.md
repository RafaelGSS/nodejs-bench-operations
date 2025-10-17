## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|99,039,978|49520682|
|Setter|11,452,135|5726070|
|Method|95,781,280|47890651|
|DefineProperty (setter)|95,718,297|47880430|
|DefineProperty (setter & enumerable=false)|11,762,484|5881246|
|DefineProperty (setter & configurable=false)|11,692,516|5850612|
|DefineProperty (setter & enumerable=false & configurable=false)|11,606,313|5803160|
|DefineProperty (writable)|100,146,961|50073497|
|DefineProperty (writable & enumerable=false)|100,798,197|50406658|
|DefineProperty (writable & enumerable=false & configurable=false)|100,953,957|50476990|
|DefineProperties (setter)|101,066,142|50541754|
|DefineProperties (setter & enumerable=false)|11,664,716|5835784|
|DefineProperties (setter & enumerable=false & configurable=false)|11,819,128|5909565|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:52:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":49520682,"opsSec":99039978.62877893},{"name":"Setter","samples":5726070,"opsSec":11452135.281720266},{"name":"Method","samples":47890651,"opsSec":95781280.73655568},{"name":"DefineProperty (setter)","samples":47880430,"opsSec":95718297.136249},{"name":"DefineProperty (setter & enumerable=false)","samples":5881246,"opsSec":11762484.401435077},{"name":"DefineProperty (setter & configurable=false)","samples":5850612,"opsSec":11692516.372592036},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5803160,"opsSec":11606313.871866276},{"name":"DefineProperty (writable)","samples":50073497,"opsSec":100146961.35209058},{"name":"DefineProperty (writable & enumerable=false)","samples":50406658,"opsSec":100798197.07682404},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50476990,"opsSec":100953957.99203715},{"name":"DefineProperties (setter)","samples":50541754,"opsSec":101066142.81534146},{"name":"DefineProperties (setter & enumerable=false)","samples":5835784,"opsSec":11664716.308946153},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5909565,"opsSec":11819128.699895844}]}-->
