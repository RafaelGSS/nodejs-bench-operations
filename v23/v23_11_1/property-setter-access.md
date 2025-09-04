## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|96,511,273|48255846|
|Setter|11,536,086|5769325|
|Method|88,337,249|44169492|
|DefineProperty (setter)|95,271,421|47794785|
|DefineProperty (setter & enumerable=false)|11,655,142|5828435|
|DefineProperty (setter & configurable=false)|11,498,724|5749634|
|DefineProperty (setter & enumerable=false & configurable=false)|11,438,430|5719218|
|DefineProperty (writable)|96,560,226|48287732|
|DefineProperty (writable & enumerable=false)|95,612,288|47810045|
|DefineProperty (writable & enumerable=false & configurable=false)|97,688,638|48845294|
|DefineProperties (setter)|95,683,797|47841968|
|DefineProperties (setter & enumerable=false)|11,551,361|5777420|
|DefineProperties (setter & enumerable=false & configurable=false)|11,518,938|5760307|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:58:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":48255846,"opsSec":96511273.527118},{"name":"Setter","samples":5769325,"opsSec":11536086.243265469},{"name":"Method","samples":44169492,"opsSec":88337249.93978369},{"name":"DefineProperty (setter)","samples":47794785,"opsSec":95271421.75744025},{"name":"DefineProperty (setter & enumerable=false)","samples":5828435,"opsSec":11655142.311634576},{"name":"DefineProperty (setter & configurable=false)","samples":5749634,"opsSec":11498724.639265895},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5719218,"opsSec":11438430.601060757},{"name":"DefineProperty (writable)","samples":48287732,"opsSec":96560226.79621156},{"name":"DefineProperty (writable & enumerable=false)","samples":47810045,"opsSec":95612288.22850513},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48845294,"opsSec":97688638.91627635},{"name":"DefineProperties (setter)","samples":47841968,"opsSec":95683797.83259593},{"name":"DefineProperties (setter & enumerable=false)","samples":5777420,"opsSec":11551361.861840675},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5760307,"opsSec":11518938.340039674}]}-->
