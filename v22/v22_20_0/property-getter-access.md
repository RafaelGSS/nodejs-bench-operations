## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,920,532|47960274|
|Getter|50,764,603|25382314|
|Method|98,440,356|49221059|
|DefineProperty (getter)|95,944,175|47974174|
|DefineProperty (getter & enumerable=false)|50,460,102|25262768|
|DefineProperty (getter & configurable=false)|94,707,639|47561338|
|DefineProperty (getter & enumerable=false & configurable=false)|50,478,778|25240215|
|DefineProperty (writable)|96,230,090|48115051|
|DefineProperty (writable & enumerable=false)|90,421,600|45210807|
|DefineProperty (writable & enumerable=false & configurable=false)|90,960,741|45480385|
|DefineProperties (getter)|50,699,860|25349935|
|DefineProperties (getter & enumerable=false)|49,955,689|24977849|
|DefineProperties (getter & enumerable=false & configurable=false)|50,029,811|25038814|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:18:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47960274,"opsSec":95920532.07719168},{"name":"Getter","samples":25382314,"opsSec":50764603.531461105},{"name":"Method","samples":49221059,"opsSec":98440356.31138346},{"name":"DefineProperty (getter)","samples":47974174,"opsSec":95944175.00405237},{"name":"DefineProperty (getter & enumerable=false)","samples":25262768,"opsSec":50460102.66922532},{"name":"DefineProperty (getter & configurable=false)","samples":47561338,"opsSec":94707639.84639284},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25240215,"opsSec":50478778.33437289},{"name":"DefineProperty (writable)","samples":48115051,"opsSec":96230090.06746882},{"name":"DefineProperty (writable & enumerable=false)","samples":45210807,"opsSec":90421600.25591677},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45480385,"opsSec":90960741.62024862},{"name":"DefineProperties (getter)","samples":25349935,"opsSec":50699860.975424744},{"name":"DefineProperties (getter & enumerable=false)","samples":24977849,"opsSec":49955689.90717823},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25038814,"opsSec":50029811.40738965}]}-->
