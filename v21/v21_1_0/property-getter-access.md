## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|849,953,430|99|
|Getter|105,766,479|97|
|Method|850,741,875|97|
|DefineProperty (getter)|850,757,181|96|
|DefineProperty (getter & enumerable=false)|105,539,669|98|
|DefineProperty (getter & configurable=false)|851,568,375|96|
|DefineProperty (getter & enumerable=false & configurable=false)|106,128,914|96|
|DefineProperty (writable)|851,593,201|99|
|DefineProperty (writable & enumerable=false)|851,758,966|95|
|DefineProperty (writable & enumerable=false & configurable=false)|851,613,805|100|
|DefineProperties (getter)|103,230,891|100|
|DefineProperties (getter & enumerable=false)|105,839,889|98|
|DefineProperties (getter & enumerable=false & configurable=false)|67,756,298|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:07:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":849953430.367271,"samples":6},{"name":"Getter","opsSec":105766478.91189073,"samples":8},{"name":"Method","opsSec":850741875.092484,"samples":6},{"name":"DefineProperty (getter)","opsSec":850757180.7577964,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":105539669.37207277,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":851568375.4356092,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":106128913.95239276,"samples":6},{"name":"DefineProperty (writable)","opsSec":851593200.8107682,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":851758966.350892,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":851613804.717899,"samples":6},{"name":"DefineProperties (getter)","opsSec":103230891.41325898,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":105839889.32022093,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":67756297.76691824,"samples":6}]}-->
