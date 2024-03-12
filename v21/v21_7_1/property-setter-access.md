## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|772,768,747|96|
|Setter|12,545,657|96|
|Method|783,325,345|98|
|DefineProperty (setter)|780,466,000|99|
|DefineProperty (setter & enumerable=false)|12,562,382|93|
|DefineProperty (setter & configurable=false)|12,580,362|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,601,970|96|
|DefineProperty (writable)|785,064,738|99|
|DefineProperty (writable & enumerable=false)|783,506,516|96|
|DefineProperty (writable & enumerable=false & configurable=false)|563,734,153|71|
|DefineProperties (setter)|114,575,988|85|
|DefineProperties (setter & enumerable=false)|11,526,441|93|
|DefineProperties (setter & enumerable=false & configurable=false)|12,302,191|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Setter (class)","opsSec":772768747.3327312,"samples":5},{"name":"Setter","opsSec":12545656.518869083,"samples":4},{"name":"Method","opsSec":783325345.079479,"samples":6},{"name":"DefineProperty (setter)","opsSec":780465999.5231353,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12562381.67172136,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12580362.310410058,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12601969.608243097,"samples":6},{"name":"DefineProperty (writable)","opsSec":785064738.4603152,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":783506516.1379514,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":563734153.3161092,"samples":7},{"name":"DefineProperties (setter)","opsSec":114575988.31500103,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11526441.217846869,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12302191.12886087,"samples":4}]}-->
