## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|379,928,546|93|
|Setter|6,252,856|84|
|Method|394,899,558|93|
|DefineProperty (setter)|394,570,479|95|
|DefineProperty (setter & enumerable=false)|6,288,935|95|
|DefineProperty (setter & configurable=false)|6,405,530|89|
|DefineProperty (setter & enumerable=false & configurable=false)|6,247,006|96|
|DefineProperty (writable)|586,034,650|94|
|DefineProperty (writable & enumerable=false)|492,518,182|87|
|DefineProperty (writable & enumerable=false & configurable=false)|68,653,988|82|
|DefineProperties (setter)|51,476,021|87|
|DefineProperties (setter & enumerable=false)|6,260,336|94|
|DefineProperties (setter & enumerable=false & configurable=false)|6,234,453|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":379928546.49337554,"samples":6},{"name":"Setter","opsSec":6252855.6792115355,"samples":6},{"name":"Method","opsSec":394899558.0374539,"samples":8},{"name":"DefineProperty (setter)","opsSec":394570479.29677445,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6288934.693085386,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":6405529.913741313,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6247005.9578157645,"samples":5},{"name":"DefineProperty (writable)","opsSec":586034649.967778,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":492518181.74035215,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":68653987.86405645,"samples":6},{"name":"DefineProperties (setter)","opsSec":51476020.824865684,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6260336.365752524,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6234452.503545127,"samples":5}]}-->
