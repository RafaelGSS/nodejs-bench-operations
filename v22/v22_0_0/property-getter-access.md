## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,319,728|48659900|
|Getter|47,691,294|23846150|
|Method|89,110,855|44558730|
|DefineProperty (getter)|97,917,081|48958550|
|DefineProperty (getter & enumerable=false)|50,944,628|25473319|
|DefineProperty (getter & configurable=false)|97,868,291|48934150|
|DefineProperty (getter & enumerable=false & configurable=false)|50,992,534|25497581|
|DefineProperty (writable)|97,893,629|48946822|
|DefineProperty (writable & enumerable=false)|95,543,165|47771607|
|DefineProperty (writable & enumerable=false & configurable=false)|97,890,537|48945276|
|DefineProperties (getter)|50,538,762|25269388|
|DefineProperties (getter & enumerable=false)|50,916,143|25458501|
|DefineProperties (getter & enumerable=false & configurable=false)|48,991,620|24495842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:50:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":48659900,"opsSec":97319728.17804061},{"name":"Getter","samples":23846150,"opsSec":47691294.572127834},{"name":"Method","samples":44558730,"opsSec":89110855.28162825},{"name":"DefineProperty (getter)","samples":48958550,"opsSec":97917081.39575455},{"name":"DefineProperty (getter & enumerable=false)","samples":25473319,"opsSec":50944628.845727585},{"name":"DefineProperty (getter & configurable=false)","samples":48934150,"opsSec":97868291.58332692},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25497581,"opsSec":50992534.660644144},{"name":"DefineProperty (writable)","samples":48946822,"opsSec":97893629.70753005},{"name":"DefineProperty (writable & enumerable=false)","samples":47771607,"opsSec":95543165.84624442},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48945276,"opsSec":97890537.12063837},{"name":"DefineProperties (getter)","samples":25269388,"opsSec":50538762.25345666},{"name":"DefineProperties (getter & enumerable=false)","samples":25458501,"opsSec":50916143.859311394},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24495842,"opsSec":48991620.60484294}]}-->
