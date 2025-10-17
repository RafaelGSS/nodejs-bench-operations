## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|101,985,312|51022787|
|Getter|52,335,201|26173687|
|Method|88,356,455|44184439|
|DefineProperty (getter)|101,435,050|50719612|
|DefineProperty (getter & enumerable=false)|53,241,633|26621331|
|DefineProperty (getter & configurable=false)|101,369,785|50685020|
|DefineProperty (getter & enumerable=false & configurable=false)|53,508,905|26754467|
|DefineProperty (writable)|102,758,089|51379056|
|DefineProperty (writable & enumerable=false)|102,548,879|51275858|
|DefineProperty (writable & enumerable=false & configurable=false)|102,314,082|51165965|
|DefineProperties (getter)|53,225,268|26612636|
|DefineProperties (getter & enumerable=false)|53,341,237|26670624|
|DefineProperties (getter & enumerable=false & configurable=false)|53,142,711|26571533|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:46:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":51022787,"opsSec":101985312.30675232},{"name":"Getter","samples":26173687,"opsSec":52335201.9833931},{"name":"Method","samples":44184439,"opsSec":88356455.25910348},{"name":"DefineProperty (getter)","samples":50719612,"opsSec":101435050.75914167},{"name":"DefineProperty (getter & enumerable=false)","samples":26621331,"opsSec":53241633.90404931},{"name":"DefineProperty (getter & configurable=false)","samples":50685020,"opsSec":101369785.96731637},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26754467,"opsSec":53508905.10519124},{"name":"DefineProperty (writable)","samples":51379056,"opsSec":102758089.8042526},{"name":"DefineProperty (writable & enumerable=false)","samples":51275858,"opsSec":102548879.49799308},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51165965,"opsSec":102314082.33147809},{"name":"DefineProperties (getter)","samples":26612636,"opsSec":53225268.91293441},{"name":"DefineProperties (getter & enumerable=false)","samples":26670624,"opsSec":53341237.43843499},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26571533,"opsSec":53142711.75068347}]}-->
