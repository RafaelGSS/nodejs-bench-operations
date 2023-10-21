## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|619,787,372|88|
|Getter|47,392,602|92|
|Method|622,824,278|90|
|DefineProperty (getter)|626,962,846|90|
|DefineProperty (getter & enumerable=false)|46,711,192|91|
|DefineProperty (getter & configurable=false)|614,729,864|91|
|DefineProperty (getter & enumerable=false & configurable=false)|47,458,231|94|
|DefineProperty (writable)|622,129,007|92|
|DefineProperty (writable & enumerable=false)|628,469,209|90|
|DefineProperty (writable & enumerable=false & configurable=false)|505,989,233|81|
|DefineProperties (getter)|27,357,877|86|
|DefineProperties (getter & enumerable=false)|45,137,050|93|
|DefineProperties (getter & enumerable=false & configurable=false)|45,608,291|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":619787371.7166961,"samples":6},{"name":"Getter","opsSec":47392602.36951491,"samples":5},{"name":"Method","opsSec":622824278.1002834,"samples":9},{"name":"DefineProperty (getter)","opsSec":626962845.5028124,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":46711192.069660895,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":614729864.2265128,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":47458231.183327526,"samples":5},{"name":"DefineProperty (writable)","opsSec":622129006.7905831,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":628469208.9084446,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":505989233.27017856,"samples":6},{"name":"DefineProperties (getter)","opsSec":27357877.17506966,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":45137050.377844214,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":45608291.441150226,"samples":5}]}-->
