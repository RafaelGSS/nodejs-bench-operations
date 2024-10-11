## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|150,277,841|75171410|
|Getter|51,307,048|25659764|
|Method|100,763,960|50389402|
|DefineProperty (getter)|98,660,471|49330276|
|DefineProperty (getter & enumerable=false)|50,087,425|25044953|
|DefineProperty (getter & configurable=false)|97,355,154|48677653|
|DefineProperty (getter & enumerable=false & configurable=false)|51,476,272|25773810|
|DefineProperty (writable)|99,292,951|49647351|
|DefineProperty (writable & enumerable=false)|99,082,142|49541103|
|DefineProperty (writable & enumerable=false & configurable=false)|98,473,294|49241307|
|DefineProperties (getter)|49,285,533|24643112|
|DefineProperties (getter & enumerable=false)|49,379,727|24695435|
|DefineProperties (getter & enumerable=false & configurable=false)|51,477,071|25738748|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:28:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":150277841.66459835,"samples":75171410},{"name":"Getter","opsSec":51307048.27880486,"samples":25659764},{"name":"Method","opsSec":100763960.66248272,"samples":50389402},{"name":"DefineProperty (getter)","opsSec":98660471.29573448,"samples":49330276},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50087425.470341004,"samples":25044953},{"name":"DefineProperty (getter & configurable=false)","opsSec":97355154.32066958,"samples":48677653},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51476272.75348567,"samples":25773810},{"name":"DefineProperty (writable)","opsSec":99292951.66384807,"samples":49647351},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99082142.58742873,"samples":49541103},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98473294.88126561,"samples":49241307},{"name":"DefineProperties (getter)","opsSec":49285533.0168271,"samples":24643112},{"name":"DefineProperties (getter & enumerable=false)","opsSec":49379727.95818351,"samples":24695435},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51477071.52006825,"samples":25738748}]}-->
