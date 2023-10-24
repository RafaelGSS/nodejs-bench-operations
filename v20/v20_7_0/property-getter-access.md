## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|580,676,655|94|
|Getter|43,145,042|93|
|Method|573,410,556|90|
|DefineProperty (getter)|567,879,825|91|
|DefineProperty (getter & enumerable=false)|45,038,118|95|
|DefineProperty (getter & configurable=false)|586,614,940|91|
|DefineProperty (getter & enumerable=false & configurable=false)|45,062,680|97|
|DefineProperty (writable)|587,745,041|89|
|DefineProperty (writable & enumerable=false)|590,553,437|95|
|DefineProperty (writable & enumerable=false & configurable=false)|254,936,494|48|
|DefineProperties (getter)|25,295,795|86|
|DefineProperties (getter & enumerable=false)|44,977,051|96|
|DefineProperties (getter & enumerable=false & configurable=false)|45,068,821|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":580676655.3954877,"samples":7},{"name":"Getter","opsSec":43145042.00112312,"samples":7},{"name":"Method","opsSec":573410556.3928417,"samples":6},{"name":"DefineProperty (getter)","opsSec":567879825.4339269,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":45038118.27400225,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":586614939.9120469,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":45062679.6294818,"samples":6},{"name":"DefineProperty (writable)","opsSec":587745041.0694197,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":590553437.0029674,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":254936493.95055422,"samples":7},{"name":"DefineProperties (getter)","opsSec":25295794.545063715,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":44977050.80180999,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":45068820.74315682,"samples":5}]}-->
