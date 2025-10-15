## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|93,549,373|46774702|
|Setter|11,489,770|5744890|
|Method|90,735,819|45367929|
|DefineProperty (setter)|91,360,059|45680054|
|DefineProperty (setter & enumerable=false)|11,664,602|5832305|
|DefineProperty (setter & configurable=false)|11,823,151|5911702|
|DefineProperty (setter & enumerable=false & configurable=false)|11,691,729|5845867|
|DefineProperty (writable)|85,880,979|43144480|
|DefineProperty (writable & enumerable=false)|93,805,778|46902901|
|DefineProperty (writable & enumerable=false & configurable=false)|93,256,700|46628363|
|DefineProperties (setter)|91,389,653|45756791|
|DefineProperties (setter & enumerable=false)|11,689,719|5844865|
|DefineProperties (setter & enumerable=false & configurable=false)|11,607,144|5803576|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:23:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":46774702,"opsSec":93549373.12870687},{"name":"Setter","samples":5744890,"opsSec":11489770.049859138},{"name":"Method","samples":45367929,"opsSec":90735819.70948407},{"name":"DefineProperty (setter)","samples":45680054,"opsSec":91360059.21372838},{"name":"DefineProperty (setter & enumerable=false)","samples":5832305,"opsSec":11664602.231374914},{"name":"DefineProperty (setter & configurable=false)","samples":5911702,"opsSec":11823151.008214727},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5845867,"opsSec":11691729.32330827},{"name":"DefineProperty (writable)","samples":43144480,"opsSec":85880979.65794358},{"name":"DefineProperty (writable & enumerable=false)","samples":46902901,"opsSec":93805778.54855536},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46628363,"opsSec":93256700.07463738},{"name":"DefineProperties (setter)","samples":45756791,"opsSec":91389653.06096667},{"name":"DefineProperties (setter & enumerable=false)","samples":5844865,"opsSec":11689719.689667234},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5803576,"opsSec":11607144.664284574}]}-->
