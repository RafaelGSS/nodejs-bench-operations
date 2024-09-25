## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,112,647|7056324|
|Setter|5,999,872|2999937|
|Method|14,093,394|7046698|
|DefineProperty (setter)|14,085,835|7042918|
|DefineProperty (setter & enumerable=false)|6,032,009|3016005|
|DefineProperty (setter & configurable=false)|5,993,945|2996973|
|DefineProperty (setter & enumerable=false & configurable=false)|6,021,374|3010688|
|DefineProperty (writable)|14,277,496|7138749|
|DefineProperty (writable & enumerable=false)|14,235,745|7117873|
|DefineProperty (writable & enumerable=false & configurable=false)|13,619,805|6809929|
|DefineProperties (setter)|12,864,619|6432310|
|DefineProperties (setter & enumerable=false)|6,018,242|3009122|
|DefineProperties (setter & enumerable=false & configurable=false)|6,037,704|3018853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:32:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14112647.520234512,"samples":7056324},{"name":"Setter","opsSec":5999872.692040232,"samples":2999937},{"name":"Method","opsSec":14093394.985210001,"samples":7046698},{"name":"DefineProperty (setter)","opsSec":14085835.126455938,"samples":7042918},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6032009.034887707,"samples":3016005},{"name":"DefineProperty (setter & configurable=false)","opsSec":5993945.38867179,"samples":2996973},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6021374.036811817,"samples":3010688},{"name":"DefineProperty (writable)","opsSec":14277496.601188393,"samples":7138749},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14235745.516070044,"samples":7117873},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13619805.290458672,"samples":6809929},{"name":"DefineProperties (setter)","opsSec":12864619.433748007,"samples":6432310},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6018242.098044286,"samples":3009122},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6037704.671596982,"samples":3018853}]}-->
