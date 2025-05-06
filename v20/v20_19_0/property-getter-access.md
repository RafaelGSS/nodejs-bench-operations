## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|98,368,807|49213548|
|Getter|51,151,204|25575649|
|Method|100,621,882|50310948|
|DefineProperty (getter)|100,919,671|50461735|
|DefineProperty (getter & enumerable=false)|52,970,271|26504609|
|DefineProperty (getter & configurable=false)|102,779,682|51426362|
|DefineProperty (getter & enumerable=false & configurable=false)|52,528,193|26264205|
|DefineProperty (writable)|101,135,446|50567775|
|DefineProperty (writable & enumerable=false)|102,703,678|51351844|
|DefineProperty (writable & enumerable=false & configurable=false)|102,986,020|51493513|
|DefineProperties (getter)|50,083,257|25041632|
|DefineProperties (getter & enumerable=false)|54,035,425|27041021|
|DefineProperties (getter & enumerable=false & configurable=false)|53,857,793|26928973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:24:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":49213548,"opsSec":98368807.36645739},{"name":"Getter","samples":25575649,"opsSec":51151204.49559818},{"name":"Method","samples":50310948,"opsSec":100621882.31542401},{"name":"DefineProperty (getter)","samples":50461735,"opsSec":100919671.98906438},{"name":"DefineProperty (getter & enumerable=false)","samples":26504609,"opsSec":52970271.39607494},{"name":"DefineProperty (getter & configurable=false)","samples":51426362,"opsSec":102779682.59077005},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26264205,"opsSec":52528193.37373053},{"name":"DefineProperty (writable)","samples":50567775,"opsSec":101135446.63957354},{"name":"DefineProperty (writable & enumerable=false)","samples":51351844,"opsSec":102703678.1404469},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51493513,"opsSec":102986020.85643645},{"name":"DefineProperties (getter)","samples":25041632,"opsSec":50083257.88984253},{"name":"DefineProperties (getter & enumerable=false)","samples":27041021,"opsSec":54035425.85425723},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26928973,"opsSec":53857793.905590005}]}-->
