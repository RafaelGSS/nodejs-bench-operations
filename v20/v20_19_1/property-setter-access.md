## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|101,696,245|50916601|
|Setter|11,890,780|5946149|
|Method|101,004,790|50511848|
|DefineProperty (setter)|103,901,803|51951397|
|DefineProperty (setter & enumerable=false)|11,668,823|5834491|
|DefineProperty (setter & configurable=false)|11,571,407|5786080|
|DefineProperty (setter & enumerable=false & configurable=false)|11,841,074|5921124|
|DefineProperty (writable)|103,230,130|51615237|
|DefineProperty (writable & enumerable=false)|104,462,167|52231637|
|DefineProperty (writable & enumerable=false & configurable=false)|104,040,791|52020425|
|DefineProperties (setter)|95,072,683|47536346|
|DefineProperties (setter & enumerable=false)|11,412,988|5706831|
|DefineProperties (setter & enumerable=false & configurable=false)|11,689,643|5848327|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:33:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":50916601,"opsSec":101696245.22584447},{"name":"Setter","samples":5946149,"opsSec":11890780.355921611},{"name":"Method","samples":50511848,"opsSec":101004790.12539391},{"name":"DefineProperty (setter)","samples":51951397,"opsSec":103901803.19240475},{"name":"DefineProperty (setter & enumerable=false)","samples":5834491,"opsSec":11668823.794087},{"name":"DefineProperty (setter & configurable=false)","samples":5786080,"opsSec":11571407.372521678},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5921124,"opsSec":11841074.146955514},{"name":"DefineProperty (writable)","samples":51615237,"opsSec":103230130.24366629},{"name":"DefineProperty (writable & enumerable=false)","samples":52231637,"opsSec":104462167.32779934},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":52020425,"opsSec":104040791.11291224},{"name":"DefineProperties (setter)","samples":47536346,"opsSec":95072683.82374918},{"name":"DefineProperties (setter & enumerable=false)","samples":5706831,"opsSec":11412988.930390818},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5848327,"opsSec":11689643.837487096}]}-->
