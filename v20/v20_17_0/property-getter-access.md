## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|139,157,160|69672211|
|Getter|48,540,734|24636728|
|Method|78,844,302|39422154|
|DefineProperty (getter)|94,547,034|47275381|
|DefineProperty (getter & enumerable=false)|50,965,342|25482677|
|DefineProperty (getter & configurable=false)|99,532,360|49799471|
|DefineProperty (getter & enumerable=false & configurable=false)|51,759,250|25879633|
|DefineProperty (writable)|99,868,106|49934059|
|DefineProperty (writable & enumerable=false)|97,644,774|48844904|
|DefineProperty (writable & enumerable=false & configurable=false)|97,438,595|48719306|
|DefineProperties (getter)|50,990,856|25506396|
|DefineProperties (getter & enumerable=false)|48,565,726|24287919|
|DefineProperties (getter & enumerable=false & configurable=false)|51,770,299|25891674|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:52:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":139157160.99159682,"samples":69672211},{"name":"Getter","opsSec":48540734.486657135,"samples":24636728},{"name":"Method","opsSec":78844302.79627602,"samples":39422154},{"name":"DefineProperty (getter)","opsSec":94547034.3886222,"samples":47275381},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50965342.99148591,"samples":25482677},{"name":"DefineProperty (getter & configurable=false)","opsSec":99532360.82255137,"samples":49799471},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51759250.16166945,"samples":25879633},{"name":"DefineProperty (writable)","opsSec":99868106.01582728,"samples":49934059},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97644774.03492554,"samples":48844904},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":97438595.04568447,"samples":48719306},{"name":"DefineProperties (getter)","opsSec":50990856.44742831,"samples":25506396},{"name":"DefineProperties (getter & enumerable=false)","opsSec":48565726.71282984,"samples":24287919},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51770299.19254792,"samples":25891674}]}-->
