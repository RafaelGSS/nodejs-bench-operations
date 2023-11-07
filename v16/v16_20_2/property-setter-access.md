## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|837,367,151|98|
|Setter|11,535,570|99|
|Method|843,479,844|98|
|DefineProperty (setter)|845,502,286|94|
|DefineProperty (setter & enumerable=false)|11,472,355|98|
|DefineProperty (setter & configurable=false)|11,703,951|98|
|DefineProperty (setter & enumerable=false & configurable=false)|11,682,589|96|
|DefineProperty (writable)|848,389,820|98|
|DefineProperty (writable & enumerable=false)|694,651,317|85|
|DefineProperty (writable & enumerable=false & configurable=false)|140,619,079|82|
|DefineProperties (setter)|114,962,745|88|
|DefineProperties (setter & enumerable=false)|11,656,864|100|
|DefineProperties (setter & enumerable=false & configurable=false)|11,460,999|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:11:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":837367150.7368085,"samples":6},{"name":"Setter","opsSec":11535570.065001272,"samples":5},{"name":"Method","opsSec":843479843.6631336,"samples":6},{"name":"DefineProperty (setter)","opsSec":845502285.9177407,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11472355.190668756,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":11703951.395803507,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11682588.925213298,"samples":5},{"name":"DefineProperty (writable)","opsSec":848389819.5999658,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":694651317.0855881,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":140619078.90489835,"samples":5},{"name":"DefineProperties (setter)","opsSec":114962745.0315896,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11656864.289178126,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11460999.204503264,"samples":5}]}-->
