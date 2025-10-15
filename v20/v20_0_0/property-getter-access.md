## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|101,019,696|50584003|
|Getter|53,181,491|26595387|
|Method|101,434,089|50765073|
|DefineProperty (getter)|102,553,367|51276783|
|DefineProperty (getter & enumerable=false)|50,803,381|25457029|
|DefineProperty (getter & configurable=false)|97,862,648|48931332|
|DefineProperty (getter & enumerable=false & configurable=false)|51,544,576|25772307|
|DefineProperty (writable)|102,370,178|51190794|
|DefineProperty (writable & enumerable=false)|101,208,361|51086116|
|DefineProperty (writable & enumerable=false & configurable=false)|102,184,099|51107539|
|DefineProperties (getter)|53,355,392|26677705|
|DefineProperties (getter & enumerable=false)|53,322,975|26661624|
|DefineProperties (getter & enumerable=false & configurable=false)|52,756,811|26414635|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:18:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":50584003,"opsSec":101019696.559009},{"name":"Getter","samples":26595387,"opsSec":53181491.06437173},{"name":"Method","samples":50765073,"opsSec":101434089.33747466},{"name":"DefineProperty (getter)","samples":51276783,"opsSec":102553367.25157426},{"name":"DefineProperty (getter & enumerable=false)","samples":25457029,"opsSec":50803381.10694356},{"name":"DefineProperty (getter & configurable=false)","samples":48931332,"opsSec":97862648.146251},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25772307,"opsSec":51544576.269370176},{"name":"DefineProperty (writable)","samples":51190794,"opsSec":102370178.22941527},{"name":"DefineProperty (writable & enumerable=false)","samples":51086116,"opsSec":101208361.21727704},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51107539,"opsSec":102184099.45967141},{"name":"DefineProperties (getter)","samples":26677705,"opsSec":53355392.286009766},{"name":"DefineProperties (getter & enumerable=false)","samples":26661624,"opsSec":53322975.83953132},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26414635,"opsSec":52756811.052346535}]}-->
