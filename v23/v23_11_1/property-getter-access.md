## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|96,978,760|48536559|
|Getter|48,820,822|24418544|
|Method|94,319,549|47179200|
|DefineProperty (getter)|97,094,009|48549310|
|DefineProperty (getter & enumerable=false)|50,034,705|25019175|
|DefineProperty (getter & configurable=false)|97,454,692|48728089|
|DefineProperty (getter & enumerable=false & configurable=false)|48,046,932|24033189|
|DefineProperty (writable)|91,928,259|45964554|
|DefineProperty (writable & enumerable=false)|97,437,896|48725474|
|DefineProperty (writable & enumerable=false & configurable=false)|89,603,850|44806935|
|DefineProperties (getter)|49,841,606|24932019|
|DefineProperties (getter & enumerable=false)|49,868,304|24936383|
|DefineProperties (getter & enumerable=false & configurable=false)|50,060,452|25043179|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:54:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":48536559,"opsSec":96978760.18778506},{"name":"Getter","samples":24418544,"opsSec":48820822.366612114},{"name":"Method","samples":47179200,"opsSec":94319549.02320094},{"name":"DefineProperty (getter)","samples":48549310,"opsSec":97094009.39386994},{"name":"DefineProperty (getter & enumerable=false)","samples":25019175,"opsSec":50034705.57211554},{"name":"DefineProperty (getter & configurable=false)","samples":48728089,"opsSec":97454692.79048188},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24033189,"opsSec":48046932.54155565},{"name":"DefineProperty (writable)","samples":45964554,"opsSec":91928259.31830998},{"name":"DefineProperty (writable & enumerable=false)","samples":48725474,"opsSec":97437896.38865453},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":44806935,"opsSec":89603850.3182497},{"name":"DefineProperties (getter)","samples":24932019,"opsSec":49841606.58558972},{"name":"DefineProperties (getter & enumerable=false)","samples":24936383,"opsSec":49868304.78145424},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25043179,"opsSec":50060452.016444206}]}-->
