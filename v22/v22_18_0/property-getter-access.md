## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|93,125,051|46564334|
|Getter|49,344,646|24674776|
|Method|95,005,006|47512320|
|DefineProperty (getter)|86,946,676|43473347|
|DefineProperty (getter & enumerable=false)|49,286,107|24649492|
|DefineProperty (getter & configurable=false)|94,652,120|47326360|
|DefineProperty (getter & enumerable=false & configurable=false)|49,105,503|24556669|
|DefineProperty (writable)|93,969,534|47019918|
|DefineProperty (writable & enumerable=false)|91,461,521|45731045|
|DefineProperty (writable & enumerable=false & configurable=false)|93,935,026|46971240|
|DefineProperties (getter)|49,874,388|24937659|
|DefineProperties (getter & enumerable=false)|49,079,373|24541185|
|DefineProperties (getter & enumerable=false & configurable=false)|49,779,156|24896811|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:53:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":46564334,"opsSec":93125051.20926113},{"name":"Getter","samples":24674776,"opsSec":49344646.94471511},{"name":"Method","samples":47512320,"opsSec":95005006.07543443},{"name":"DefineProperty (getter)","samples":43473347,"opsSec":86946676.95845132},{"name":"DefineProperty (getter & enumerable=false)","samples":24649492,"opsSec":49286107.01881919},{"name":"DefineProperty (getter & configurable=false)","samples":47326360,"opsSec":94652120.28416587},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24556669,"opsSec":49105503.609743096},{"name":"DefineProperty (writable)","samples":47019918,"opsSec":93969534.00870487},{"name":"DefineProperty (writable & enumerable=false)","samples":45731045,"opsSec":91461521.65810442},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46971240,"opsSec":93935026.44352175},{"name":"DefineProperties (getter)","samples":24937659,"opsSec":49874388.2416544},{"name":"DefineProperties (getter & enumerable=false)","samples":24541185,"opsSec":49079373.6060826},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24896811,"opsSec":49779156.77439125}]}-->
