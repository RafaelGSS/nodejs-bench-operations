## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|585,393,197|82|
|Getter|51,911,102|87|
|Method|604,637,956|90|
|DefineProperty (getter)|604,744,989|91|
|DefineProperty (getter & enumerable=false)|52,959,074|92|
|DefineProperty (getter & configurable=false)|605,952,103|89|
|DefineProperty (getter & enumerable=false & configurable=false)|52,503,981|94|
|DefineProperty (writable)|610,747,861|90|
|DefineProperty (writable & enumerable=false)|616,436,772|93|
|DefineProperty (writable & enumerable=false & configurable=false)|613,286,029|89|
|DefineProperties (getter)|52,219,164|90|
|DefineProperties (getter & enumerable=false)|42,020,247|74|
|DefineProperties (getter & enumerable=false & configurable=false)|32,606,688|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":585393197.101487,"samples":6},{"name":"Getter","opsSec":51911101.93455596,"samples":6},{"name":"Method","opsSec":604637956.1557711,"samples":7},{"name":"DefineProperty (getter)","opsSec":604744989.4005779,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52959074.1272898,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":605952103.2905266,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52503980.5662725,"samples":5},{"name":"DefineProperty (writable)","opsSec":610747861.1039828,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":616436771.5135764,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":613286029.2566508,"samples":7},{"name":"DefineProperties (getter)","opsSec":52219163.982723214,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":42020246.96931156,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":32606688.132211767,"samples":6}]}-->
