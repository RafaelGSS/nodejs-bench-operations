## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|818,201,430|98|
|Getter|92,034,617|95|
|Method|818,612,510|98|
|DefineProperty (getter)|818,280,148|99|
|DefineProperty (getter & enumerable=false)|89,056,328|98|
|DefineProperty (getter & configurable=false)|818,366,697|99|
|DefineProperty (getter & enumerable=false & configurable=false)|83,724,939|92|
|DefineProperty (writable)|819,345,111|95|
|DefineProperty (writable & enumerable=false)|819,371,572|95|
|DefineProperty (writable & enumerable=false & configurable=false)|819,666,660|98|
|DefineProperties (getter)|92,074,965|98|
|DefineProperties (getter & enumerable=false)|74,788,926|79|
|DefineProperties (getter & enumerable=false & configurable=false)|56,664,095|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Getter (class)","opsSec":818201429.6566632,"samples":6},{"name":"Getter","opsSec":92034616.83355825,"samples":7},{"name":"Method","opsSec":818612510.0357095,"samples":7},{"name":"DefineProperty (getter)","opsSec":818280148.0938064,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":89056327.95297518,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":818366697.1447096,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":83724938.91282296,"samples":6},{"name":"DefineProperty (writable)","opsSec":819345111.2637435,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":819371572.2369227,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":819666660.0864315,"samples":6},{"name":"DefineProperties (getter)","opsSec":92074965.21903564,"samples":8},{"name":"DefineProperties (getter & enumerable=false)","opsSec":74788925.963557,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":56664095.16228401,"samples":5}]}-->
