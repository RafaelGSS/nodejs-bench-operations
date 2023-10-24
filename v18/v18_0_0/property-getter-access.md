## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|588,822,031|95|
|Getter|69,572,837|98|
|Method|592,203,473|98|
|DefineProperty (getter)|591,414,815|99|
|DefineProperty (getter & enumerable=false)|69,492,275|94|
|DefineProperty (getter & configurable=false)|592,499,883|97|
|DefineProperty (getter & enumerable=false & configurable=false)|69,592,971|96|
|DefineProperty (writable)|592,023,052|96|
|DefineProperty (writable & enumerable=false)|592,343,673|98|
|DefineProperty (writable & enumerable=false & configurable=false)|402,462,079|68|
|DefineProperties (getter)|43,852,654|88|
|DefineProperties (getter & enumerable=false)|69,658,683|96|
|DefineProperties (getter & enumerable=false & configurable=false)|69,288,757|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":588822031.0591865,"samples":7},{"name":"Getter","opsSec":69572837.11167715,"samples":5},{"name":"Method","opsSec":592203473.3983008,"samples":7},{"name":"DefineProperty (getter)","opsSec":591414815.4561051,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":69492274.91954108,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":592499883.0921907,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":69592970.95459181,"samples":6},{"name":"DefineProperty (writable)","opsSec":592023051.8691404,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":592343673.2539847,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":402462078.9194462,"samples":7},{"name":"DefineProperties (getter)","opsSec":43852653.73127805,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":69658682.6529101,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":69288756.82680985,"samples":7}]}-->
