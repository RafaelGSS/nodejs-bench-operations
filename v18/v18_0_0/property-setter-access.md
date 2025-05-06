## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|103,116,997|51648701|
|Setter|9,999,723|5005086|
|Method|101,981,652|51017271|
|DefineProperty (setter)|103,728,005|51904971|
|DefineProperty (setter & enumerable=false)|9,912,342|4956729|
|DefineProperty (setter & configurable=false)|9,959,310|4979885|
|DefineProperty (setter & enumerable=false & configurable=false)|9,929,479|4966649|
|DefineProperty (writable)|98,990,557|49528132|
|DefineProperty (writable & enumerable=false)|97,781,445|48900887|
|DefineProperty (writable & enumerable=false & configurable=false)|98,471,565|49272725|
|DefineProperties (setter)|98,488,533|49263933|
|DefineProperties (setter & enumerable=false)|10,083,399|5044252|
|DefineProperties (setter & enumerable=false & configurable=false)|9,971,799|4985903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:33:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":51648701,"opsSec":103116997.36946417},{"name":"Setter","samples":5005086,"opsSec":9999723.369049469},{"name":"Method","samples":51017271,"opsSec":101981652.88706963},{"name":"DefineProperty (setter)","samples":51904971,"opsSec":103728005.17415282},{"name":"DefineProperty (setter & enumerable=false)","samples":4956729,"opsSec":9912342.048707472},{"name":"DefineProperty (setter & configurable=false)","samples":4979885,"opsSec":9959310.736344703},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":4966649,"opsSec":9929479.201734846},{"name":"DefineProperty (writable)","samples":49528132,"opsSec":98990557.23580472},{"name":"DefineProperty (writable & enumerable=false)","samples":48900887,"opsSec":97781445.23753512},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49272725,"opsSec":98471565.2090786},{"name":"DefineProperties (setter)","samples":49263933,"opsSec":98488533.22541697},{"name":"DefineProperties (setter & enumerable=false)","samples":5044252,"opsSec":10083399.641933657},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":4985903,"opsSec":9971799.119458606}]}-->
