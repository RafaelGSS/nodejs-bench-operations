## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|710,713,517|88|
|Getter|51,187,790|84|
|Method|717,775,003|86|
|DefineProperty (getter)|730,529,734|87|
|DefineProperty (getter & enumerable=false)|52,524,768|87|
|DefineProperty (getter & configurable=false)|738,519,587|88|
|DefineProperty (getter & enumerable=false & configurable=false)|51,248,729|86|
|DefineProperty (writable)|741,930,312|90|
|DefineProperty (writable & enumerable=false)|260,590,692|36|
|DefineProperty (writable & enumerable=false & configurable=false)|712,278,864|91|
|DefineProperties (getter)|51,706,172|85|
|DefineProperties (getter & enumerable=false)|52,790,525|87|
|DefineProperties (getter & enumerable=false & configurable=false)|51,454,785|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":710713516.8381191,"samples":6},{"name":"Getter","opsSec":51187790.15054272,"samples":7},{"name":"Method","opsSec":717775003.050625,"samples":8},{"name":"DefineProperty (getter)","opsSec":730529733.9800127,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52524768.15641603,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":738519587.2314054,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51248728.997690775,"samples":8},{"name":"DefineProperty (writable)","opsSec":741930311.9637858,"samples":5},{"name":"DefineProperty (writable & enumerable=false)","opsSec":260590692.2786555,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":712278863.825875,"samples":8},{"name":"DefineProperties (getter)","opsSec":51706171.53541699,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52790524.77257173,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51454784.79801917,"samples":5}]}-->
