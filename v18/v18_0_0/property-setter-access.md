## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|101,866,913|50933470|
|Setter|9,975,356|4987681|
|Method|101,545,470|50772749|
|DefineProperty (setter)|104,631,610|52324513|
|DefineProperty (setter & enumerable=false)|9,902,041|4951023|
|DefineProperty (setter & configurable=false)|9,943,008|4972269|
|DefineProperty (setter & enumerable=false & configurable=false)|9,935,824|4970340|
|DefineProperty (writable)|98,748,771|49374398|
|DefineProperty (writable & enumerable=false)|101,222,636|50614792|
|DefineProperty (writable & enumerable=false & configurable=false)|99,124,764|49569762|
|DefineProperties (setter)|97,744,059|48875556|
|DefineProperties (setter & enumerable=false)|9,855,365|4930702|
|DefineProperties (setter & enumerable=false & configurable=false)|9,962,220|4984835|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:59:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":50933470,"opsSec":101866913.31086873},{"name":"Setter","samples":4987681,"opsSec":9975356.45370181},{"name":"Method","samples":50772749,"opsSec":101545470.17654116},{"name":"DefineProperty (setter)","samples":52324513,"opsSec":104631610.90541768},{"name":"DefineProperty (setter & enumerable=false)","samples":4951023,"opsSec":9902041.108391693},{"name":"DefineProperty (setter & configurable=false)","samples":4972269,"opsSec":9943008.248294983},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":4970340,"opsSec":9935824.720148955},{"name":"DefineProperty (writable)","samples":49374398,"opsSec":98748771.11530969},{"name":"DefineProperty (writable & enumerable=false)","samples":50614792,"opsSec":101222636.07825959},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49569762,"opsSec":99124764.32259238},{"name":"DefineProperties (setter)","samples":48875556,"opsSec":97744059.37513985},{"name":"DefineProperties (setter & enumerable=false)","samples":4930702,"opsSec":9855365.164416963},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":4984835,"opsSec":9962220.231786229}]}-->
