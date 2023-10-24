## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|713,820,052|98|
|Getter|58,412,926|93|
|Method|714,466,993|97|
|DefineProperty (getter)|713,982,454|97|
|DefineProperty (getter & enumerable=false)|59,329,553|93|
|DefineProperty (getter & configurable=false)|715,678,236|97|
|DefineProperty (getter & enumerable=false & configurable=false)|59,285,582|95|
|DefineProperty (writable)|715,542,057|93|
|DefineProperty (writable & enumerable=false)|716,101,452|98|
|DefineProperty (writable & enumerable=false & configurable=false)|232,363,169|35|
|DefineProperties (getter)|36,996,616|88|
|DefineProperties (getter & enumerable=false)|58,831,476|90|
|DefineProperties (getter & enumerable=false & configurable=false)|59,062,692|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":713820052.1079543,"samples":7},{"name":"Getter","opsSec":58412925.75124048,"samples":8},{"name":"Method","opsSec":714466993.0081675,"samples":7},{"name":"DefineProperty (getter)","opsSec":713982453.8313644,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":59329552.84042154,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":715678235.6943243,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":59285581.52703302,"samples":6},{"name":"DefineProperty (writable)","opsSec":715542056.688089,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":716101451.575137,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":232363168.5723853,"samples":8},{"name":"DefineProperties (getter)","opsSec":36996615.931834735,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":58831475.50469733,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":59062691.53561097,"samples":5}]}-->
