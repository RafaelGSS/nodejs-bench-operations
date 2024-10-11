## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|140,660,045|71139840|
|Setter|11,248,841|5624423|
|Method|94,182,420|47095375|
|DefineProperty (setter)|100,431,413|50217986|
|DefineProperty (setter & enumerable=false)|11,110,283|5555145|
|DefineProperty (setter & configurable=false)|11,310,184|5655094|
|DefineProperty (setter & enumerable=false & configurable=false)|11,361,700|5680938|
|DefineProperty (writable)|100,691,663|50350957|
|DefineProperty (writable & enumerable=false)|100,681,106|50340566|
|DefineProperty (writable & enumerable=false & configurable=false)|98,688,850|49347728|
|DefineProperties (setter)|99,403,480|49703362|
|DefineProperties (setter & enumerable=false)|11,413,930|5707049|
|DefineProperties (setter & enumerable=false & configurable=false)|11,244,279|5622168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:46:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":140660045.12793288,"samples":71139840},{"name":"Setter","opsSec":11248841.657947121,"samples":5624423},{"name":"Method","opsSec":94182420.3183822,"samples":47095375},{"name":"DefineProperty (setter)","opsSec":100431413.61899866,"samples":50217986},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11110283.51159443,"samples":5555145},{"name":"DefineProperty (setter & configurable=false)","opsSec":11310184.96887043,"samples":5655094},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11361700.961634986,"samples":5680938},{"name":"DefineProperty (writable)","opsSec":100691663.99137233,"samples":50350957},{"name":"DefineProperty (writable & enumerable=false)","opsSec":100681106.42699897,"samples":50340566},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98688850.36048998,"samples":49347728},{"name":"DefineProperties (setter)","opsSec":99403480.46443245,"samples":49703362},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11413930.831569042,"samples":5707049},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11244279.711135766,"samples":5622168}]}-->
