## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|87,696,332|43849137|
|Setter|11,437,669|5718839|
|Method|91,208,039|45608071|
|DefineProperty (setter)|96,175,088|48087561|
|DefineProperty (setter & enumerable=false)|11,634,714|5822792|
|DefineProperty (setter & configurable=false)|11,570,890|5785450|
|DefineProperty (setter & enumerable=false & configurable=false)|11,506,773|5753389|
|DefineProperty (writable)|96,331,391|48165704|
|DefineProperty (writable & enumerable=false)|97,301,417|48650731|
|DefineProperty (writable & enumerable=false & configurable=false)|94,001,193|47000613|
|DefineProperties (setter)|96,208,163|48104682|
|DefineProperties (setter & enumerable=false)|11,415,173|5707590|
|DefineProperties (setter & enumerable=false & configurable=false)|11,355,838|5677923|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:56:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":43849137,"opsSec":87696332.4032006},{"name":"Setter","samples":5718839,"opsSec":11437669.421747932},{"name":"Method","samples":45608071,"opsSec":91208039.62500794},{"name":"DefineProperty (setter)","samples":48087561,"opsSec":96175088.33871907},{"name":"DefineProperty (setter & enumerable=false)","samples":5822792,"opsSec":11634714.709901433},{"name":"DefineProperty (setter & configurable=false)","samples":5785450,"opsSec":11570890.21102688},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5753389,"opsSec":11506773.604412483},{"name":"DefineProperty (writable)","samples":48165704,"opsSec":96331391.23833793},{"name":"DefineProperty (writable & enumerable=false)","samples":48650731,"opsSec":97301417.63055356},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47000613,"opsSec":94001193.66358937},{"name":"DefineProperties (setter)","samples":48104682,"opsSec":96208163.32212172},{"name":"DefineProperties (setter & enumerable=false)","samples":5707590,"opsSec":11415173.858636463},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5677923,"opsSec":11355838.028201705}]}-->
