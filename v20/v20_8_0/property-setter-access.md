## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|583,777,655|86|
|Setter|7,001,076|88|
|Method|603,208,366|88|
|DefineProperty (setter)|594,476,478|87|
|DefineProperty (setter & enumerable=false)|6,864,385|87|
|DefineProperty (setter & configurable=false)|7,143,920|91|
|DefineProperty (setter & enumerable=false & configurable=false)|6,910,480|85|
|DefineProperty (writable)|621,522,424|89|
|DefineProperty (writable & enumerable=false)|623,774,117|91|
|DefineProperty (writable & enumerable=false & configurable=false)|619,522,629|90|
|DefineProperties (setter)|619,366,534|88|
|DefineProperties (setter & enumerable=false)|7,269,712|89|
|DefineProperties (setter & enumerable=false & configurable=false)|7,338,741|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Setter (class)","opsSec":583777654.5525314,"samples":7},{"name":"Setter","opsSec":7001076.277173399,"samples":7},{"name":"Method","opsSec":603208365.7754401,"samples":8},{"name":"DefineProperty (setter)","opsSec":594476477.605056,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6864384.955209443,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":7143920.062240904,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6910479.610195861,"samples":5},{"name":"DefineProperty (writable)","opsSec":621522423.673249,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":623774117.150327,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":619522629.4312088,"samples":6},{"name":"DefineProperties (setter)","opsSec":619366534.2695694,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7269711.557091986,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7338740.647773316,"samples":4}]}-->
