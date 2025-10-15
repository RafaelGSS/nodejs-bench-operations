## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|98,848,785|49424399|
|Getter|54,116,062|27066640|
|Method|101,153,203|50576618|
|DefineProperty (getter)|99,064,726|49813005|
|DefineProperty (getter & enumerable=false)|53,373,809|26686908|
|DefineProperty (getter & configurable=false)|100,228,175|50115014|
|DefineProperty (getter & enumerable=false & configurable=false)|54,034,316|27017166|
|DefineProperty (writable)|98,889,203|49461939|
|DefineProperty (writable & enumerable=false)|100,643,753|50321917|
|DefineProperty (writable & enumerable=false & configurable=false)|100,382,697|50191789|
|DefineProperties (getter)|53,473,188|26736603|
|DefineProperties (getter & enumerable=false)|53,220,906|26622924|
|DefineProperties (getter & enumerable=false & configurable=false)|53,930,521|26982353|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:17:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":49424399,"opsSec":98848785.9404481},{"name":"Getter","samples":27066640,"opsSec":54116062.000785336},{"name":"Method","samples":50576618,"opsSec":101153203.22636215},{"name":"DefineProperty (getter)","samples":49813005,"opsSec":99064726.49693081},{"name":"DefineProperty (getter & enumerable=false)","samples":26686908,"opsSec":53373809.38164763},{"name":"DefineProperty (getter & configurable=false)","samples":50115014,"opsSec":100228175.78331152},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27017166,"opsSec":54034316.87039127},{"name":"DefineProperty (writable)","samples":49461939,"opsSec":98889203.68739745},{"name":"DefineProperty (writable & enumerable=false)","samples":50321917,"opsSec":100643753.08242252},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50191789,"opsSec":100382697.24221438},{"name":"DefineProperties (getter)","samples":26736603,"opsSec":53473188.78163321},{"name":"DefineProperties (getter & enumerable=false)","samples":26622924,"opsSec":53220906.554352365},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26982353,"opsSec":53930521.06061531}]}-->
