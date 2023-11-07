## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|848,508,203|100|
|Getter|99,031,020|95|
|Method|848,873,078|96|
|DefineProperty (getter)|847,990,067|96|
|DefineProperty (getter & enumerable=false)|99,038,867|95|
|DefineProperty (getter & configurable=false)|849,268,232|101|
|DefineProperty (getter & enumerable=false & configurable=false)|99,675,270|98|
|DefineProperty (writable)|848,387,352|98|
|DefineProperty (writable & enumerable=false)|574,536,582|71|
|DefineProperty (writable & enumerable=false & configurable=false)|148,752,887|72|
|DefineProperties (getter)|65,773,005|89|
|DefineProperties (getter & enumerable=false)|98,893,535|96|
|DefineProperties (getter & enumerable=false & configurable=false)|99,048,038|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:59:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":848508203.497266,"samples":6},{"name":"Getter","opsSec":99031020.1654046,"samples":5},{"name":"Method","opsSec":848873078.2167206,"samples":7},{"name":"DefineProperty (getter)","opsSec":847990067.2375263,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":99038867.00300044,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":849268231.547391,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":99675269.64902677,"samples":5},{"name":"DefineProperty (writable)","opsSec":848387351.8751976,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":574536582.3911774,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":148752886.90924558,"samples":6},{"name":"DefineProperties (getter)","opsSec":65773005.03872324,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":98893534.72087704,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":99048038.13803363,"samples":5}]}-->
