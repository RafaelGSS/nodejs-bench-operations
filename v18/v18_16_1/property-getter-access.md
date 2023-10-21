## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|591,276,097|97|
|Getter|70,998,916|94|
|Method|592,203,332|97|
|DefineProperty (getter)|592,132,519|96|
|DefineProperty (getter & enumerable=false)|71,008,458|93|
|DefineProperty (getter & configurable=false)|593,306,933|97|
|DefineProperty (getter & enumerable=false & configurable=false)|70,772,236|93|
|DefineProperty (writable)|593,191,832|96|
|DefineProperty (writable & enumerable=false)|591,123,825|94|
|DefineProperty (writable & enumerable=false & configurable=false)|592,454,434|96|
|DefineProperties (getter)|70,495,507|93|
|DefineProperties (getter & enumerable=false)|70,822,201|94|
|DefineProperties (getter & enumerable=false & configurable=false)|45,347,668|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:20:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":591276097.0027034,"samples":6},{"name":"Getter","opsSec":70998915.79100917,"samples":7},{"name":"Method","opsSec":592203332.086083,"samples":6},{"name":"DefineProperty (getter)","opsSec":592132518.8519146,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":71008458.22146624,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":593306933.3978246,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":70772236.24725176,"samples":6},{"name":"DefineProperty (writable)","opsSec":593191831.9245576,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":591123824.8398892,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":592454433.58352,"samples":6},{"name":"DefineProperties (getter)","opsSec":70495506.50704727,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":70822201.34748782,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":45347668.225396894,"samples":6}]}-->
