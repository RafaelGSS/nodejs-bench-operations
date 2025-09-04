## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|100,415,037|50214038|
|Getter|53,640,343|26820177|
|Method|101,656,712|50830923|
|DefineProperty (getter)|100,635,971|50317991|
|DefineProperty (getter & enumerable=false)|53,811,453|26905917|
|DefineProperty (getter & configurable=false)|99,065,972|49532996|
|DefineProperty (getter & enumerable=false & configurable=false)|53,089,433|26574613|
|DefineProperty (writable)|100,060,912|50031631|
|DefineProperty (writable & enumerable=false)|100,259,084|50129772|
|DefineProperty (writable & enumerable=false & configurable=false)|100,088,608|50052985|
|DefineProperties (getter)|48,069,414|24034709|
|DefineProperties (getter & enumerable=false)|49,108,244|24567774|
|DefineProperties (getter & enumerable=false & configurable=false)|47,945,185|23972967|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:54:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":50214038,"opsSec":100415037.9106476},{"name":"Getter","samples":26820177,"opsSec":53640343.27193135},{"name":"Method","samples":50830923,"opsSec":101656712.13272388},{"name":"DefineProperty (getter)","samples":50317991,"opsSec":100635971.33258703},{"name":"DefineProperty (getter & enumerable=false)","samples":26905917,"opsSec":53811453.875889815},{"name":"DefineProperty (getter & configurable=false)","samples":49532996,"opsSec":99065972.97933319},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26574613,"opsSec":53089433.60069175},{"name":"DefineProperty (writable)","samples":50031631,"opsSec":100060912.56977285},{"name":"DefineProperty (writable & enumerable=false)","samples":50129772,"opsSec":100259084.81339157},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50052985,"opsSec":100088608.22966206},{"name":"DefineProperties (getter)","samples":24034709,"opsSec":48069414.7312798},{"name":"DefineProperties (getter & enumerable=false)","samples":24567774,"opsSec":49108244.79805718},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":23972967,"opsSec":47945185.76743091}]}-->
