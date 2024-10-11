## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|150,356,478|75229986|
|Getter|51,075,879|25537946|
|Method|100,857,894|50429144|
|DefineProperty (getter)|97,177,270|48588728|
|DefineProperty (getter & enumerable=false)|51,519,323|25764604|
|DefineProperty (getter & configurable=false)|98,757,004|49391127|
|DefineProperty (getter & enumerable=false & configurable=false)|51,717,099|25858671|
|DefineProperty (writable)|96,710,863|48357097|
|DefineProperty (writable & enumerable=false)|98,894,402|49453504|
|DefineProperty (writable & enumerable=false & configurable=false)|99,425,982|49713116|
|DefineProperties (getter)|50,959,804|25480439|
|DefineProperties (getter & enumerable=false)|49,659,957|24829985|
|DefineProperties (getter & enumerable=false & configurable=false)|49,906,602|24953303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:54:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Getter (class)","opsSec":150356478.62863034,"samples":75229986},{"name":"Getter","opsSec":51075879.8439406,"samples":25537946},{"name":"Method","opsSec":100857894.65421084,"samples":50429144},{"name":"DefineProperty (getter)","opsSec":97177270.7801219,"samples":48588728},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51519323.502592795,"samples":25764604},{"name":"DefineProperty (getter & configurable=false)","opsSec":98757004.20419309,"samples":49391127},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51717099.55023731,"samples":25858671},{"name":"DefineProperty (writable)","opsSec":96710863.8581139,"samples":48357097},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98894402.1283495,"samples":49453504},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99425982.44078407,"samples":49713116},{"name":"DefineProperties (getter)","opsSec":50959804.27692388,"samples":25480439},{"name":"DefineProperties (getter & enumerable=false)","opsSec":49659957.68433049,"samples":24829985},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":49906602.60635102,"samples":24953303}]}-->
