## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|100,728,166|50366350|
|Setter|11,700,267|5850136|
|Method|95,334,387|47674357|
|DefineProperty (setter)|101,075,444|50542502|
|DefineProperty (setter & enumerable=false)|11,725,110|5862612|
|DefineProperty (setter & configurable=false)|11,498,195|5749101|
|DefineProperty (setter & enumerable=false & configurable=false)|11,774,858|5892108|
|DefineProperty (writable)|99,855,413|50569325|
|DefineProperty (writable & enumerable=false)|99,108,389|49555204|
|DefineProperty (writable & enumerable=false & configurable=false)|100,831,697|50415852|
|DefineProperties (setter)|101,170,639|50607183|
|DefineProperties (setter & enumerable=false)|11,622,708|5811357|
|DefineProperties (setter & enumerable=false & configurable=false)|11,560,449|5780239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:22:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":50366350,"opsSec":100728166.82958001},{"name":"Setter","samples":5850136,"opsSec":11700267.670900961},{"name":"Method","samples":47674357,"opsSec":95334387.14829935},{"name":"DefineProperty (setter)","samples":50542502,"opsSec":101075444.68874311},{"name":"DefineProperty (setter & enumerable=false)","samples":5862612,"opsSec":11725110.102280468},{"name":"DefineProperty (setter & configurable=false)","samples":5749101,"opsSec":11498195.813970651},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5892108,"opsSec":11774858.731713364},{"name":"DefineProperty (writable)","samples":50569325,"opsSec":99855413.0792887},{"name":"DefineProperty (writable & enumerable=false)","samples":49555204,"opsSec":99108389.16211276},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50415852,"opsSec":100831697.95009811},{"name":"DefineProperties (setter)","samples":50607183,"opsSec":101170639.64486293},{"name":"DefineProperties (setter & enumerable=false)","samples":5811357,"opsSec":11622708.746535646},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5780239,"opsSec":11560449.491931554}]}-->
