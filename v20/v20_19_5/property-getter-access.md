## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|98,833,899|49416963|
|Getter|53,276,577|26638295|
|Method|101,694,897|50912591|
|DefineProperty (getter)|99,443,435|49723962|
|DefineProperty (getter & enumerable=false)|53,461,367|26748367|
|DefineProperty (getter & configurable=false)|102,499,202|51249606|
|DefineProperty (getter & enumerable=false & configurable=false)|52,734,371|26375385|
|DefineProperty (writable)|102,615,135|51308002|
|DefineProperty (writable & enumerable=false)|100,922,204|50461285|
|DefineProperty (writable & enumerable=false & configurable=false)|101,371,884|50685952|
|DefineProperties (getter)|53,128,016|26564410|
|DefineProperties (getter & enumerable=false)|50,721,122|25389822|
|DefineProperties (getter & enumerable=false & configurable=false)|53,380,950|26696829|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:50:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":49416963,"opsSec":98833899.51251493},{"name":"Getter","samples":26638295,"opsSec":53276577.63983398},{"name":"Method","samples":50912591,"opsSec":101694897.4126879},{"name":"DefineProperty (getter)","samples":49723962,"opsSec":99443435.12333852},{"name":"DefineProperty (getter & enumerable=false)","samples":26748367,"opsSec":53461367.48772038},{"name":"DefineProperty (getter & configurable=false)","samples":51249606,"opsSec":102499202.77507176},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26375385,"opsSec":52734371.930641934},{"name":"DefineProperty (writable)","samples":51308002,"opsSec":102615135.67072195},{"name":"DefineProperty (writable & enumerable=false)","samples":50461285,"opsSec":100922204.8634628},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50685952,"opsSec":101371884.94208562},{"name":"DefineProperties (getter)","samples":26564410,"opsSec":53128016.38562415},{"name":"DefineProperties (getter & enumerable=false)","samples":25389822,"opsSec":50721122.07079696},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26696829,"opsSec":53380950.984903745}]}-->
