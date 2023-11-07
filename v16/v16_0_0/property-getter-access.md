## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|846,714,279|100|
|Getter|97,437,919|95|
|Method|847,647,419|96|
|DefineProperty (getter)|846,749,206|97|
|DefineProperty (getter & enumerable=false)|96,235,684|93|
|DefineProperty (getter & configurable=false)|847,187,514|98|
|DefineProperty (getter & enumerable=false & configurable=false)|97,368,853|94|
|DefineProperty (writable)|384,091,240|46|
|DefineProperty (writable & enumerable=false)|127,601,150|79|
|DefineProperty (writable & enumerable=false & configurable=false)|136,726,862|82|
|DefineProperties (getter)|55,026,548|87|
|DefineProperties (getter & enumerable=false)|98,684,019|96|
|DefineProperties (getter & enumerable=false & configurable=false)|97,526,263|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:32:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":846714279.3434222,"samples":7},{"name":"Getter","opsSec":97437919.06917572,"samples":6},{"name":"Method","opsSec":847647419.3614761,"samples":7},{"name":"DefineProperty (getter)","opsSec":846749206.2230102,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":96235683.88728148,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":847187513.7697531,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":97368853.0847806,"samples":6},{"name":"DefineProperty (writable)","opsSec":384091239.5812095,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":127601149.51143529,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":136726861.78426978,"samples":6},{"name":"DefineProperties (getter)","opsSec":55026547.79276611,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":98684019.27379559,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":97526263.17530368,"samples":5}]}-->
