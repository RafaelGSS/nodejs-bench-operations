## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|707,589,144|96|
|Getter|52,794,411|97|
|Method|707,800,433|94|
|DefineProperty (getter)|707,407,945|98|
|DefineProperty (getter & enumerable=false)|52,654,553|93|
|DefineProperty (getter & configurable=false)|706,759,827|99|
|DefineProperty (getter & enumerable=false & configurable=false)|52,604,150|97|
|DefineProperty (writable)|707,409,400|95|
|DefineProperty (writable & enumerable=false)|708,082,333|96|
|DefineProperty (writable & enumerable=false & configurable=false)|179,970,087|26|
|DefineProperties (getter)|32,427,643|89|
|DefineProperties (getter & enumerable=false)|53,075,186|96|
|DefineProperties (getter & enumerable=false & configurable=false)|52,717,327|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":707589143.8695506,"samples":9},{"name":"Getter","opsSec":52794411.179088816,"samples":8},{"name":"Method","opsSec":707800432.7745126,"samples":6},{"name":"DefineProperty (getter)","opsSec":707407944.7180982,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52654552.54530432,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":706759827.3194871,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52604149.60261449,"samples":7},{"name":"DefineProperty (writable)","opsSec":707409400.1726266,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":708082333.1216109,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":179970087.38117823,"samples":6},{"name":"DefineProperties (getter)","opsSec":32427643.165990204,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":53075186.37127027,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52717327.16830748,"samples":9}]}-->
