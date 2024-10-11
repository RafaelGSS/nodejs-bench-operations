## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|145,183,713|72591877|
|Getter|51,134,945|25570376|
|Method|95,823,917|47911977|
|DefineProperty (getter)|100,380,646|50190381|
|DefineProperty (getter & enumerable=false)|52,216,650|26108332|
|DefineProperty (getter & configurable=false)|99,826,900|49913454|
|DefineProperty (getter & enumerable=false & configurable=false)|48,471,630|24241129|
|DefineProperty (writable)|99,487,560|49767008|
|DefineProperty (writable & enumerable=false)|99,779,928|49913027|
|DefineProperty (writable & enumerable=false & configurable=false)|99,129,612|49564856|
|DefineProperties (getter)|49,949,560|25021948|
|DefineProperties (getter & enumerable=false)|46,676,259|23347629|
|DefineProperties (getter & enumerable=false & configurable=false)|51,553,226|25776618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:48:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Getter (class)","opsSec":145183713.34856024,"samples":72591877},{"name":"Getter","opsSec":51134945.52466579,"samples":25570376},{"name":"Method","opsSec":95823917.97020684,"samples":47911977},{"name":"DefineProperty (getter)","opsSec":100380646.96377859,"samples":50190381},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52216650.736970715,"samples":26108332},{"name":"DefineProperty (getter & configurable=false)","opsSec":99826900.013848,"samples":49913454},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48471630.69191406,"samples":24241129},{"name":"DefineProperty (writable)","opsSec":99487560.2837255,"samples":49767008},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99779928.93181255,"samples":49913027},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99129612.07735103,"samples":49564856},{"name":"DefineProperties (getter)","opsSec":49949560.460920535,"samples":25021948},{"name":"DefineProperties (getter & enumerable=false)","opsSec":46676259.548780896,"samples":23347629},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51553226.10178059,"samples":25776618}]}-->
