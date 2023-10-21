## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|586,204,334|96|
|Getter|43,911,645|93|
|Method|598,495,572|93|
|DefineProperty (getter)|598,054,668|94|
|DefineProperty (getter & enumerable=false)|44,244,485|92|
|DefineProperty (getter & configurable=false)|597,395,732|94|
|DefineProperty (getter & enumerable=false & configurable=false)|44,289,020|91|
|DefineProperty (writable)|592,924,785|93|
|DefineProperty (writable & enumerable=false)|600,508,461|94|
|DefineProperty (writable & enumerable=false & configurable=false)|601,526,395|91|
|DefineProperties (getter)|34,452,476|76|
|DefineProperties (getter & enumerable=false)|44,603,112|93|
|DefineProperties (getter & enumerable=false & configurable=false)|44,223,194|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Getter (class)","opsSec":586204334.3223919,"samples":6},{"name":"Getter","opsSec":43911644.68038753,"samples":5},{"name":"Method","opsSec":598495572.1469394,"samples":6},{"name":"DefineProperty (getter)","opsSec":598054668.3880986,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":44244484.67803517,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":597395731.7323202,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":44289019.55545369,"samples":6},{"name":"DefineProperty (writable)","opsSec":592924785.2533602,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":600508461.2979916,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":601526395.4421029,"samples":6},{"name":"DefineProperties (getter)","opsSec":34452476.14912288,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":44603112.28274886,"samples":8},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":44223194.21136635,"samples":6}]}-->
