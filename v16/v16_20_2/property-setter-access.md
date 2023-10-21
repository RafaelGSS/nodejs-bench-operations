## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|402,752,775|91|
|Setter|6,204,754|92|
|Method|412,284,077|92|
|DefineProperty (setter)|415,244,383|93|
|DefineProperty (setter & enumerable=false)|6,120,098|93|
|DefineProperty (setter & configurable=false)|6,233,321|94|
|DefineProperty (setter & enumerable=false & configurable=false)|6,342,463|93|
|DefineProperty (writable)|628,820,317|91|
|DefineProperty (writable & enumerable=false)|618,751,358|93|
|DefineProperty (writable & enumerable=false & configurable=false)|614,700,544|89|
|DefineProperties (setter)|615,919,660|88|
|DefineProperties (setter & enumerable=false)|6,250,957|94|
|DefineProperties (setter & enumerable=false & configurable=false)|6,318,930|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":402752775.3082066,"samples":6},{"name":"Setter","opsSec":6204754.045193458,"samples":6},{"name":"Method","opsSec":412284077.20129216,"samples":6},{"name":"DefineProperty (setter)","opsSec":415244383.14380336,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6120097.563446122,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":6233321.059789399,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6342463.115721068,"samples":6},{"name":"DefineProperty (writable)","opsSec":628820316.9583396,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":618751357.8288717,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":614700543.6631685,"samples":7},{"name":"DefineProperties (setter)","opsSec":615919659.6681441,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6250956.89997317,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6318929.678885833,"samples":6}]}-->
