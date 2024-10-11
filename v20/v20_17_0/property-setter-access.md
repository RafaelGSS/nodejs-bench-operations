## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|136,223,171|68115785|
|Setter|10,420,666|5210336|
|Method|98,168,430|49085209|
|DefineProperty (setter)|102,167,999|51084008|
|DefineProperty (setter & enumerable=false)|10,679,671|5339939|
|DefineProperty (setter & configurable=false)|10,353,368|5176686|
|DefineProperty (setter & enumerable=false & configurable=false)|10,577,395|5288701|
|DefineProperty (writable)|102,178,623|51089886|
|DefineProperty (writable & enumerable=false)|103,071,226|51537584|
|DefineProperty (writable & enumerable=false & configurable=false)|100,017,756|50008932|
|DefineProperties (setter)|95,444,580|47722302|
|DefineProperties (setter & enumerable=false)|10,232,778|5116392|
|DefineProperties (setter & enumerable=false & configurable=false)|10,242,243|5121123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:45:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":136223171.5690264,"samples":68115785},{"name":"Setter","opsSec":10420666.039379025,"samples":5210336},{"name":"Method","opsSec":98168430.0892907,"samples":49085209},{"name":"DefineProperty (setter)","opsSec":102167999.04011217,"samples":51084008},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10679671.262923691,"samples":5339939},{"name":"DefineProperty (setter & configurable=false)","opsSec":10353368.728335483,"samples":5176686},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10577395.399705272,"samples":5288701},{"name":"DefineProperty (writable)","opsSec":102178623.30791678,"samples":51089886},{"name":"DefineProperty (writable & enumerable=false)","opsSec":103071226.14402735,"samples":51537584},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100017756.38089414,"samples":50008932},{"name":"DefineProperties (setter)","opsSec":95444580.13885497,"samples":47722302},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10232778.126385355,"samples":5116392},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10242243.582830515,"samples":5121123}]}-->
