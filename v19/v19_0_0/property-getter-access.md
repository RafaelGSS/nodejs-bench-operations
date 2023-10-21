## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|708,089,983|95|
|Getter|52,088,380|93|
|Method|714,800,501|99|
|DefineProperty (getter)|713,650,238|98|
|DefineProperty (getter & enumerable=false)|51,697,189|96|
|DefineProperty (getter & configurable=false)|715,469,006|98|
|DefineProperty (getter & enumerable=false & configurable=false)|52,233,100|94|
|DefineProperty (writable)|715,238,554|94|
|DefineProperty (writable & enumerable=false)|715,735,543|97|
|DefineProperty (writable & enumerable=false & configurable=false)|714,985,182|98|
|DefineProperties (getter)|52,325,016|93|
|DefineProperties (getter & enumerable=false)|38,230,318|72|
|DefineProperties (getter & enumerable=false & configurable=false)|35,115,867|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":708089982.9219152,"samples":8},{"name":"Getter","opsSec":52088379.69770072,"samples":5},{"name":"Method","opsSec":714800500.7418534,"samples":8},{"name":"DefineProperty (getter)","opsSec":713650237.5575055,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51697188.853881,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":715469005.8287969,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52233100.13304968,"samples":6},{"name":"DefineProperty (writable)","opsSec":715238554.4840522,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":715735543.2767578,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":714985181.8487722,"samples":10},{"name":"DefineProperties (getter)","opsSec":52325016.04174622,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":38230317.743606366,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":35115867.44444705,"samples":7}]}-->
