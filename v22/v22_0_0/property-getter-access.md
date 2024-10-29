## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|131,795,936|65898002|
|Getter|50,865,143|25432584|
|Method|96,174,904|48087486|
|DefineProperty (getter)|96,242,083|48124741|
|DefineProperty (getter & enumerable=false)|51,162,921|25582923|
|DefineProperty (getter & configurable=false)|95,943,574|47971804|
|DefineProperty (getter & enumerable=false & configurable=false)|51,032,163|25517055|
|DefineProperty (writable)|96,682,093|48341072|
|DefineProperty (writable & enumerable=false)|96,235,295|48117651|
|DefineProperty (writable & enumerable=false & configurable=false)|96,567,686|48283849|
|DefineProperties (getter)|50,377,780|25188896|
|DefineProperties (getter & enumerable=false)|50,292,975|25147173|
|DefineProperties (getter & enumerable=false & configurable=false)|49,510,200|24759826|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:54:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":131795936.25688878,"samples":65898002},{"name":"Getter","opsSec":50865143.78819155,"samples":25432584},{"name":"Method","opsSec":96174904.1005177,"samples":48087486},{"name":"DefineProperty (getter)","opsSec":96242083.67854346,"samples":48124741},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51162921.62972549,"samples":25582923},{"name":"DefineProperty (getter & configurable=false)","opsSec":95943574.9954102,"samples":47971804},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51032163.02091643,"samples":25517055},{"name":"DefineProperty (writable)","opsSec":96682093.72531126,"samples":48341072},{"name":"DefineProperty (writable & enumerable=false)","opsSec":96235295.64847049,"samples":48117651},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96567686.41187763,"samples":48283849},{"name":"DefineProperties (getter)","opsSec":50377780.816132665,"samples":25188896},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50292975.516417176,"samples":25147173},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":49510200.30472102,"samples":24759826}]}-->
