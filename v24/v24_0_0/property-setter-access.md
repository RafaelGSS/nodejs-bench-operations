## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|95,839,190|47926720|
|Setter|10,772,700|5386355|
|Method|95,426,184|47716702|
|DefineProperty (setter)|96,357,135|48178585|
|DefineProperty (setter & enumerable=false)|10,946,336|5473408|
|DefineProperty (setter & configurable=false)|10,864,090|5432258|
|DefineProperty (setter & enumerable=false & configurable=false)|10,832,144|5416075|
|DefineProperty (writable)|97,170,852|48596971|
|DefineProperty (writable & enumerable=false)|85,808,153|42904083|
|DefineProperty (writable & enumerable=false & configurable=false)|94,716,082|47358062|
|DefineProperties (setter)|96,916,378|48462053|
|DefineProperties (setter & enumerable=false)|10,854,495|5427251|
|DefineProperties (setter & enumerable=false & configurable=false)|10,434,246|5217126|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:22:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":47926720,"opsSec":95839190.43748736},{"name":"Setter","samples":5386355,"opsSec":10772700.606205072},{"name":"Method","samples":47716702,"opsSec":95426184.6274282},{"name":"DefineProperty (setter)","samples":48178585,"opsSec":96357135.8895739},{"name":"DefineProperty (setter & enumerable=false)","samples":5473408,"opsSec":10946336.265866812},{"name":"DefineProperty (setter & configurable=false)","samples":5432258,"opsSec":10864090.127666995},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5416075,"opsSec":10832144.345620653},{"name":"DefineProperty (writable)","samples":48596971,"opsSec":97170852.84497209},{"name":"DefineProperty (writable & enumerable=false)","samples":42904083,"opsSec":85808153.98685844},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47358062,"opsSec":94716082.1354917},{"name":"DefineProperties (setter)","samples":48462053,"opsSec":96916378.08184451},{"name":"DefineProperties (setter & enumerable=false)","samples":5427251,"opsSec":10854495.74781045},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5217126,"opsSec":10434246.344638482}]}-->
