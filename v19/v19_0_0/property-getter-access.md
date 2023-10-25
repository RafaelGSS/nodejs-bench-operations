## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|714,728,669|94|
|Getter|52,066,450|95|
|Method|717,965,722|93|
|DefineProperty (getter)|715,944,298|94|
|DefineProperty (getter & enumerable=false)|52,171,383|92|
|DefineProperty (getter & configurable=false)|716,977,134|98|
|DefineProperty (getter & enumerable=false & configurable=false)|51,517,957|96|
|DefineProperty (writable)|719,263,427|98|
|DefineProperty (writable & enumerable=false)|719,514,947|98|
|DefineProperty (writable & enumerable=false & configurable=false)|719,719,138|97|
|DefineProperties (getter)|52,097,816|95|
|DefineProperties (getter & enumerable=false)|51,983,319|94|
|DefineProperties (getter & enumerable=false & configurable=false)|43,292,925|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":714728668.5056046,"samples":6},{"name":"Getter","opsSec":52066450.05249492,"samples":5},{"name":"Method","opsSec":717965722.1695694,"samples":7},{"name":"DefineProperty (getter)","opsSec":715944298.4827048,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52171383.02529614,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":716977133.500382,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51517957.23379923,"samples":5},{"name":"DefineProperty (writable)","opsSec":719263427.4686328,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":719514947.1128896,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":719719137.6196437,"samples":7},{"name":"DefineProperties (getter)","opsSec":52097815.99226284,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51983319.01386157,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":43292925.23755297,"samples":5}]}-->
