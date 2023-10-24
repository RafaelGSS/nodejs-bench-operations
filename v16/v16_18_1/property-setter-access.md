## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|589,645,335|97|
|Setter|7,695,172|96|
|Method|586,079,292|95|
|DefineProperty (setter)|593,027,477|97|
|DefineProperty (setter & enumerable=false)|7,653,093|98|
|DefineProperty (setter & configurable=false)|7,606,648|99|
|DefineProperty (setter & enumerable=false & configurable=false)|7,728,987|94|
|DefineProperty (writable)|592,443,448|90|
|DefineProperty (writable & enumerable=false)|471,252,757|77|
|DefineProperty (writable & enumerable=false & configurable=false)|106,992,809|84|
|DefineProperties (setter)|85,437,903|87|
|DefineProperties (setter & enumerable=false)|7,552,220|96|
|DefineProperties (setter & enumerable=false & configurable=false)|7,682,471|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Setter (class)","opsSec":589645335.1745175,"samples":6},{"name":"Setter","opsSec":7695172.185424053,"samples":6},{"name":"Method","opsSec":586079291.5281724,"samples":7},{"name":"DefineProperty (setter)","opsSec":593027477.2834554,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7653093.28869773,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":7606647.783403639,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7728986.865152112,"samples":7},{"name":"DefineProperty (writable)","opsSec":592443447.8463371,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":471252757.05117553,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":106992808.77135289,"samples":5},{"name":"DefineProperties (setter)","opsSec":85437903.46089074,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7552220.490497522,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7682470.903433837,"samples":5}]}-->
