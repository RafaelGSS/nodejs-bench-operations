## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|96,727,930|48364030|
|Getter|48,779,957|24390006|
|Method|94,723,427|47363668|
|DefineProperty (getter)|97,301,266|48650655|
|DefineProperty (getter & enumerable=false)|48,725,152|24365021|
|DefineProperty (getter & configurable=false)|96,100,181|48062288|
|DefineProperty (getter & enumerable=false & configurable=false)|48,557,607|24278881|
|DefineProperty (writable)|97,092,885|48552697|
|DefineProperty (writable & enumerable=false)|96,228,064|48114912|
|DefineProperty (writable & enumerable=false & configurable=false)|96,976,364|48488189|
|DefineProperties (getter)|49,851,750|24933802|
|DefineProperties (getter & enumerable=false)|49,015,821|24521373|
|DefineProperties (getter & enumerable=false & configurable=false)|47,657,604|23828808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:25:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":48364030,"opsSec":96727930.19111769},{"name":"Getter","samples":24390006,"opsSec":48779957.07376834},{"name":"Method","samples":47363668,"opsSec":94723427.14305551},{"name":"DefineProperty (getter)","samples":48650655,"opsSec":97301266.01982775},{"name":"DefineProperty (getter & enumerable=false)","samples":24365021,"opsSec":48725152.62583461},{"name":"DefineProperty (getter & configurable=false)","samples":48062288,"opsSec":96100181.54551576},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24278881,"opsSec":48557607.29546315},{"name":"DefineProperty (writable)","samples":48552697,"opsSec":97092885.71771875},{"name":"DefineProperty (writable & enumerable=false)","samples":48114912,"opsSec":96228064.18116227},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48488189,"opsSec":96976364.22935627},{"name":"DefineProperties (getter)","samples":24933802,"opsSec":49851750.14641844},{"name":"DefineProperties (getter & enumerable=false)","samples":24521373,"opsSec":49015821.7071679},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":23828808,"opsSec":47657604.6574901}]}-->
