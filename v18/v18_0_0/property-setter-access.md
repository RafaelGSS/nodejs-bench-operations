## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|390,092,017|95|
|Setter|5,775,377|98|
|Method|393,520,533|96|
|DefineProperty (setter)|392,503,642|97|
|DefineProperty (setter & enumerable=false)|4,974,967|97|
|DefineProperty (setter & configurable=false)|5,780,856|93|
|DefineProperty (setter & enumerable=false & configurable=false)|5,772,458|92|
|DefineProperty (writable)|586,263,960|94|
|DefineProperty (writable & enumerable=false)|587,211,477|94|
|DefineProperty (writable & enumerable=false & configurable=false)|378,248,384|64|
|DefineProperties (setter)|58,840,210|84|
|DefineProperties (setter & enumerable=false)|5,680,944|97|
|DefineProperties (setter & enumerable=false & configurable=false)|5,756,164|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":390092016.9162838,"samples":7},{"name":"Setter","opsSec":5775377.043844006,"samples":6},{"name":"Method","opsSec":393520532.836069,"samples":8},{"name":"DefineProperty (setter)","opsSec":392503642.0881593,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":4974967.471102991,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5780855.764052864,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5772457.903412471,"samples":5},{"name":"DefineProperty (writable)","opsSec":586263960.1473362,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":587211477.1679869,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":378248383.8593871,"samples":11},{"name":"DefineProperties (setter)","opsSec":58840209.50863844,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5680943.652216309,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5756163.82062624,"samples":6}]}-->
