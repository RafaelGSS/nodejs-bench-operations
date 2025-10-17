## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,613,957|48807151|
|Getter|50,159,974|25080748|
|Method|100,972,045|50486031|
|DefineProperty (getter)|98,425,924|49229965|
|DefineProperty (getter & enumerable=false)|51,072,164|25544680|
|DefineProperty (getter & configurable=false)|97,684,536|49125139|
|DefineProperty (getter & enumerable=false & configurable=false)|50,036,351|25117648|
|DefineProperty (writable)|98,612,745|49438831|
|DefineProperty (writable & enumerable=false)|95,744,744|49188253|
|DefineProperty (writable & enumerable=false & configurable=false)|98,585,169|49292594|
|DefineProperties (getter)|50,976,323|25488175|
|DefineProperties (getter & enumerable=false)|51,550,152|25775589|
|DefineProperties (getter & enumerable=false & configurable=false)|51,623,134|25812518|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:48:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":48807151,"opsSec":97613957.22750308},{"name":"Getter","samples":25080748,"opsSec":50159974.1463844},{"name":"Method","samples":50486031,"opsSec":100972045.03669645},{"name":"DefineProperty (getter)","samples":49229965,"opsSec":98425924.040096},{"name":"DefineProperty (getter & enumerable=false)","samples":25544680,"opsSec":51072164.30871024},{"name":"DefineProperty (getter & configurable=false)","samples":49125139,"opsSec":97684536.83271886},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25117648,"opsSec":50036351.466568924},{"name":"DefineProperty (writable)","samples":49438831,"opsSec":98612745.17131296},{"name":"DefineProperty (writable & enumerable=false)","samples":49188253,"opsSec":95744744.17431033},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49292594,"opsSec":98585169.66315843},{"name":"DefineProperties (getter)","samples":25488175,"opsSec":50976323.69621697},{"name":"DefineProperties (getter & enumerable=false)","samples":25775589,"opsSec":51550152.25507043},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25812518,"opsSec":51623134.20373594}]}-->
