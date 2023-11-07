## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|847,741,330|93|
|Getter|106,127,466|98|
|Method|849,501,818|98|
|DefineProperty (getter)|850,144,022|100|
|DefineProperty (getter & enumerable=false)|105,966,411|98|
|DefineProperty (getter & configurable=false)|845,778,293|101|
|DefineProperty (getter & enumerable=false & configurable=false)|105,853,059|96|
|DefineProperty (writable)|849,131,828|98|
|DefineProperty (writable & enumerable=false)|851,382,779|97|
|DefineProperty (writable & enumerable=false & configurable=false)|851,703,605|99|
|DefineProperties (getter)|99,350,392|93|
|DefineProperties (getter & enumerable=false)|64,485,145|88|
|DefineProperties (getter & enumerable=false & configurable=false)|64,614,797|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:04:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":847741330.319115,"samples":7},{"name":"Getter","opsSec":106127465.91865821,"samples":6},{"name":"Method","opsSec":849501818.4774122,"samples":7},{"name":"DefineProperty (getter)","opsSec":850144022.433709,"samples":9},{"name":"DefineProperty (getter & enumerable=false)","opsSec":105966411.48868653,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":845778292.9373568,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":105853058.5896906,"samples":5},{"name":"DefineProperty (writable)","opsSec":849131827.8409817,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":851382778.8922056,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":851703604.5484645,"samples":9},{"name":"DefineProperties (getter)","opsSec":99350391.51013431,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":64485144.70499446,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":64614796.775210336,"samples":5}]}-->
