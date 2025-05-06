## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,056,224|48557068|
|Getter|49,846,425|24923682|
|Method|94,640,192|47320116|
|DefineProperty (getter)|94,253,733|47138225|
|DefineProperty (getter & enumerable=false)|50,003,182|25004255|
|DefineProperty (getter & configurable=false)|97,219,363|48609693|
|DefineProperty (getter & enumerable=false & configurable=false)|46,615,120|23314259|
|DefineProperty (writable)|95,697,675|47853332|
|DefineProperty (writable & enumerable=false)|94,495,161|47247588|
|DefineProperty (writable & enumerable=false & configurable=false)|97,282,384|48655641|
|DefineProperties (getter)|49,853,629|24935752|
|DefineProperties (getter & enumerable=false)|49,955,351|24981802|
|DefineProperties (getter & enumerable=false & configurable=false)|47,590,429|23800773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:26:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":48557068,"opsSec":97056224.29797342},{"name":"Getter","samples":24923682,"opsSec":49846425.192427926},{"name":"Method","samples":47320116,"opsSec":94640192.25111927},{"name":"DefineProperty (getter)","samples":47138225,"opsSec":94253733.71912888},{"name":"DefineProperty (getter & enumerable=false)","samples":25004255,"opsSec":50003182.16094076},{"name":"DefineProperty (getter & configurable=false)","samples":48609693,"opsSec":97219363.83398505},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":23314259,"opsSec":46615120.62787107},{"name":"DefineProperty (writable)","samples":47853332,"opsSec":95697675.3087536},{"name":"DefineProperty (writable & enumerable=false)","samples":47247588,"opsSec":94495161.25875483},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48655641,"opsSec":97282384.46226026},{"name":"DefineProperties (getter)","samples":24935752,"opsSec":49853629.77870092},{"name":"DefineProperties (getter & enumerable=false)","samples":24981802,"opsSec":49955351.475846894},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":23800773,"opsSec":47590429.63708365}]}-->
