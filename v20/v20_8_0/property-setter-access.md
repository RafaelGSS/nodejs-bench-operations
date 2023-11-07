## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|838,422,704|99|
|Setter|12,817,029|100|
|Method|847,616,361|95|
|DefineProperty (setter)|819,832,036|96|
|DefineProperty (setter & enumerable=false)|12,641,929|99|
|DefineProperty (setter & configurable=false)|12,346,945|97|
|DefineProperty (setter & enumerable=false & configurable=false)|12,630,247|94|
|DefineProperty (writable)|848,170,039|100|
|DefineProperty (writable & enumerable=false)|848,406,651|98|
|DefineProperty (writable & enumerable=false & configurable=false)|820,590,484|96|
|DefineProperties (setter)|850,064,358|101|
|DefineProperties (setter & enumerable=false)|12,367,497|100|
|DefineProperties (setter & enumerable=false & configurable=false)|11,511,277|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:26:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":838422703.7166764,"samples":7},{"name":"Setter","opsSec":12817028.541995669,"samples":5},{"name":"Method","opsSec":847616360.5254976,"samples":7},{"name":"DefineProperty (setter)","opsSec":819832036.1634698,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12641929.207374282,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":12346944.628189448,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12630246.892382516,"samples":6},{"name":"DefineProperty (writable)","opsSec":848170039.1273782,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":848406651.2240232,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":820590483.6244849,"samples":6},{"name":"DefineProperties (setter)","opsSec":850064358.2845733,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12367497.015510771,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11511277.291745396,"samples":6}]}-->
