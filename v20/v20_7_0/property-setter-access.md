## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|477,398,594|97|
|Setter|8,584,743|97|
|Method|482,103,883|94|
|DefineProperty (setter)|480,085,611|94|
|DefineProperty (setter & enumerable=false)|8,470,199|96|
|DefineProperty (setter & configurable=false)|8,578,790|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,568,327|96|
|DefineProperty (writable)|483,367,765|97|
|DefineProperty (writable & enumerable=false)|483,228,782|97|
|DefineProperty (writable & enumerable=false & configurable=false)|482,562,600|96|
|DefineProperties (setter)|534,935,636|73|
|DefineProperties (setter & enumerable=false)|7,732,820|89|
|DefineProperties (setter & enumerable=false & configurable=false)|7,602,625|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":477398594.06289136,"samples":8},{"name":"Setter","opsSec":8584742.539366266,"samples":5},{"name":"Method","opsSec":482103882.9149275,"samples":6},{"name":"DefineProperty (setter)","opsSec":480085611.0755976,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8470198.54359028,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8578789.909768617,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8568327.050794642,"samples":5},{"name":"DefineProperty (writable)","opsSec":483367765.3168722,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":483228782.1621504,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":482562599.88431466,"samples":6},{"name":"DefineProperties (setter)","opsSec":534935636.3878011,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7732819.6535233,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7602625.412829265,"samples":4}]}-->
