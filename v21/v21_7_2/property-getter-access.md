## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|153,248,186|76746535|
|Getter|51,200,059|25627494|
|Method|101,340,641|50694229|
|DefineProperty (getter)|103,509,882|51761076|
|DefineProperty (getter & enumerable=false)|51,948,186|25977350|
|DefineProperty (getter & configurable=false)|103,552,083|51776314|
|DefineProperty (getter & enumerable=false & configurable=false)|52,131,329|26067406|
|DefineProperty (writable)|103,647,428|51823733|
|DefineProperty (writable & enumerable=false)|102,977,063|51492343|
|DefineProperty (writable & enumerable=false & configurable=false)|101,827,849|50914250|
|DefineProperties (getter)|49,633,362|24817414|
|DefineProperties (getter & enumerable=false)|50,315,494|25157752|
|DefineProperties (getter & enumerable=false & configurable=false)|52,624,200|26315722|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:54:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":153248186.14146614,"samples":76746535},{"name":"Getter","opsSec":51200059.24524017,"samples":25627494},{"name":"Method","opsSec":101340641.22916114,"samples":50694229},{"name":"DefineProperty (getter)","opsSec":103509882.55958068,"samples":51761076},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51948186.216930255,"samples":25977350},{"name":"DefineProperty (getter & configurable=false)","opsSec":103552083.52314483,"samples":51776314},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52131329.835692294,"samples":26067406},{"name":"DefineProperty (writable)","opsSec":103647428.06504132,"samples":51823733},{"name":"DefineProperty (writable & enumerable=false)","opsSec":102977063.84368841,"samples":51492343},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":101827849.52369723,"samples":50914250},{"name":"DefineProperties (getter)","opsSec":49633362.723865665,"samples":24817414},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50315494.23879411,"samples":25157752},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52624200.8050012,"samples":26315722}]}-->
