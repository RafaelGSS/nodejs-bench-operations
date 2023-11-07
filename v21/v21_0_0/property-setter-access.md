## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|842,958,747|93|
|Setter|13,350,013|100|
|Method|837,181,635|95|
|DefineProperty (setter)|844,517,869|100|
|DefineProperty (setter & enumerable=false)|13,342,757|99|
|DefineProperty (setter & configurable=false)|13,374,263|99|
|DefineProperty (setter & enumerable=false & configurable=false)|13,182,726|99|
|DefineProperty (writable)|849,868,139|99|
|DefineProperty (writable & enumerable=false)|819,122,153|94|
|DefineProperty (writable & enumerable=false & configurable=false)|839,384,708|92|
|DefineProperties (setter)|842,691,252|98|
|DefineProperties (setter & enumerable=false)|12,163,461|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,714,966|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:27:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":842958747.2897732,"samples":6},{"name":"Setter","opsSec":13350013.076052008,"samples":6},{"name":"Method","opsSec":837181635.2486871,"samples":8},{"name":"DefineProperty (setter)","opsSec":844517869.0477856,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":13342757.48867084,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":13374262.57277534,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13182725.626551019,"samples":5},{"name":"DefineProperty (writable)","opsSec":849868139.2400776,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":819122152.6434989,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":839384707.5645647,"samples":5},{"name":"DefineProperties (setter)","opsSec":842691251.942219,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12163461.418259595,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11714965.552110508,"samples":6}]}-->
