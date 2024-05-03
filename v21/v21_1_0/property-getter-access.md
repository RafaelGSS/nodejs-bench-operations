## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|912,293,949|94|
|Getter|102,759,538|98|
|Method|912,681,345|99|
|DefineProperty (getter)|913,192,683|99|
|DefineProperty (getter & enumerable=false)|102,610,553|97|
|DefineProperty (getter & configurable=false)|912,789,811|97|
|DefineProperty (getter & enumerable=false & configurable=false)|102,601,276|98|
|DefineProperty (writable)|912,885,882|96|
|DefineProperty (writable & enumerable=false)|913,803,324|98|
|DefineProperty (writable & enumerable=false & configurable=false)|912,451,898|95|
|DefineProperties (getter)|102,801,875|100|
|DefineProperties (getter & enumerable=false)|102,824,671|99|
|DefineProperties (getter & enumerable=false & configurable=false)|69,087,785|69|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:02:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":912293949.3422636,"samples":6},{"name":"Getter","opsSec":102759538.46098062,"samples":6},{"name":"Method","opsSec":912681344.931039,"samples":9},{"name":"DefineProperty (getter)","opsSec":913192682.8867384,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102610552.57377191,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":912789810.8247468,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":102601275.6829558,"samples":7},{"name":"DefineProperty (writable)","opsSec":912885882.1783856,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":913803323.7396636,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":912451898.4221344,"samples":7},{"name":"DefineProperties (getter)","opsSec":102801874.9933504,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":102824671.1138641,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":69087785.2681848,"samples":6}]}-->
