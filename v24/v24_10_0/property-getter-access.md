## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,301,238|47650642|
|Getter|50,234,322|25118320|
|Method|99,893,510|49975304|
|DefineProperty (getter)|96,007,813|48006213|
|DefineProperty (getter & enumerable=false)|54,209,348|27124476|
|DefineProperty (getter & configurable=false)|95,472,638|47736349|
|DefineProperty (getter & enumerable=false & configurable=false)|53,884,993|26942502|
|DefineProperty (writable)|94,281,344|47140700|
|DefineProperty (writable & enumerable=false)|95,744,784|47874851|
|DefineProperty (writable & enumerable=false & configurable=false)|94,162,555|47081285|
|DefineProperties (getter)|54,350,293|27175913|
|DefineProperties (getter & enumerable=false)|54,113,016|27062615|
|DefineProperties (getter & enumerable=false & configurable=false)|53,341,617|26670813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:19:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47650642,"opsSec":95301238.82721281},{"name":"Getter","samples":25118320,"opsSec":50234322.08791022},{"name":"Method","samples":49975304,"opsSec":99893510.66738571},{"name":"DefineProperty (getter)","samples":48006213,"opsSec":96007813.78462578},{"name":"DefineProperty (getter & enumerable=false)","samples":27124476,"opsSec":54209348.16809014},{"name":"DefineProperty (getter & configurable=false)","samples":47736349,"opsSec":95472638.04318331},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26942502,"opsSec":53884993.54631125},{"name":"DefineProperty (writable)","samples":47140700,"opsSec":94281344.5625694},{"name":"DefineProperty (writable & enumerable=false)","samples":47874851,"opsSec":95744784.54786561},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47081285,"opsSec":94162555.49896644},{"name":"DefineProperties (getter)","samples":27175913,"opsSec":54350293.97391347},{"name":"DefineProperties (getter & enumerable=false)","samples":27062615,"opsSec":54113016.90853581},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26670813,"opsSec":53341617.46534121}]}-->
