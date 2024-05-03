## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|910,089,027|97|
|Getter|102,514,368|95|
|Method|910,614,908|99|
|DefineProperty (getter)|910,203,706|97|
|DefineProperty (getter & enumerable=false)|102,248,087|95|
|DefineProperty (getter & configurable=false)|910,999,781|98|
|DefineProperty (getter & enumerable=false & configurable=false)|102,572,963|96|
|DefineProperty (writable)|910,286,338|96|
|DefineProperty (writable & enumerable=false)|911,511,934|97|
|DefineProperty (writable & enumerable=false & configurable=false)|910,735,001|93|
|DefineProperties (getter)|102,483,179|95|
|DefineProperties (getter & enumerable=false)|74,003,929|73|
|DefineProperties (getter & enumerable=false & configurable=false)|63,077,209|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:48:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":910089027.3583355,"samples":6},{"name":"Getter","opsSec":102514367.5549508,"samples":7},{"name":"Method","opsSec":910614908.1261979,"samples":7},{"name":"DefineProperty (getter)","opsSec":910203705.6150883,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102248087.41712777,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":910999781.004734,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":102572963.14435212,"samples":6},{"name":"DefineProperty (writable)","opsSec":910286338.3581047,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":911511933.6515198,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":910735001.0421096,"samples":6},{"name":"DefineProperties (getter)","opsSec":102483179.40319425,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":74003928.52188285,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":63077209.14122853,"samples":6}]}-->
