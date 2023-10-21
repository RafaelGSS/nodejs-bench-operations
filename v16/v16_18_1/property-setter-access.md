## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|581,750,753|95|
|Setter|7,635,714|95|
|Method|585,885,289|97|
|DefineProperty (setter)|584,078,384|97|
|DefineProperty (setter & enumerable=false)|7,658,339|94|
|DefineProperty (setter & configurable=false)|7,711,094|96|
|DefineProperty (setter & enumerable=false & configurable=false)|7,700,022|97|
|DefineProperty (writable)|593,107,032|94|
|DefineProperty (writable & enumerable=false)|146,306,032|26|
|DefineProperty (writable & enumerable=false & configurable=false)|106,170,381|85|
|DefineProperties (setter)|82,962,766|87|
|DefineProperties (setter & enumerable=false)|7,683,614|95|
|DefineProperties (setter & enumerable=false & configurable=false)|7,568,859|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":581750753.1315799,"samples":7},{"name":"Setter","opsSec":7635714.488862726,"samples":5},{"name":"Method","opsSec":585885288.8834404,"samples":7},{"name":"DefineProperty (setter)","opsSec":584078384.0999511,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7658338.916828206,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7711093.877289472,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7700021.560358976,"samples":6},{"name":"DefineProperty (writable)","opsSec":593107032.3273975,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":146306032.1788037,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":106170380.82896303,"samples":5},{"name":"DefineProperties (setter)","opsSec":82962765.88966061,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7683613.894760077,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7568859.35841437,"samples":5}]}-->
