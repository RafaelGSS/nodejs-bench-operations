## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|814,583,054|99|
|Setter|11,848,296|93|
|Method|838,460,859|96|
|DefineProperty (setter)|830,298,663|100|
|DefineProperty (setter & enumerable=false)|11,280,110|95|
|DefineProperty (setter & configurable=false)|11,876,371|94|
|DefineProperty (setter & enumerable=false & configurable=false)|11,598,028|95|
|DefineProperty (writable)|847,414,873|98|
|DefineProperty (writable & enumerable=false)|847,922,751|99|
|DefineProperty (writable & enumerable=false & configurable=false)|848,021,102|98|
|DefineProperties (setter)|723,015,934|91|
|DefineProperties (setter & enumerable=false)|10,989,790|95|
|DefineProperties (setter & enumerable=false & configurable=false)|10,826,168|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:15:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":814583053.5787696,"samples":9},{"name":"Setter","opsSec":11848296.417830484,"samples":4},{"name":"Method","opsSec":838460858.6037499,"samples":8},{"name":"DefineProperty (setter)","opsSec":830298663.1994696,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11280110.239327298,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":11876370.619910717,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11598027.54784838,"samples":5},{"name":"DefineProperty (writable)","opsSec":847414873.3703942,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":847922751.3086348,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":848021102.2957822,"samples":7},{"name":"DefineProperties (setter)","opsSec":723015934.098802,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10989789.819393078,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10826167.754355734,"samples":6}]}-->
