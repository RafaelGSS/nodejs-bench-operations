## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,371,533|7685767|
|Getter|12,965,982|6482992|
|Method|15,827,950|7913976|
|DefineProperty (getter)|15,972,263|7986132|
|DefineProperty (getter & enumerable=false)|13,050,958|6525480|
|DefineProperty (getter & configurable=false)|15,812,705|7906353|
|DefineProperty (getter & enumerable=false & configurable=false)|12,750,317|6375159|
|DefineProperty (writable)|15,954,462|7977232|
|DefineProperty (writable & enumerable=false)|15,819,008|7909505|
|DefineProperty (writable & enumerable=false & configurable=false)|15,895,176|7947589|
|DefineProperties (getter)|12,863,369|6431685|
|DefineProperties (getter & enumerable=false)|12,730,976|6365489|
|DefineProperties (getter & enumerable=false & configurable=false)|12,882,702|6441352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:09:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":15371533.331449524,"samples":7685767},{"name":"Getter","opsSec":12965982.667056642,"samples":6482992},{"name":"Method","opsSec":15827950.954042712,"samples":7913976},{"name":"DefineProperty (getter)","opsSec":15972263.025249433,"samples":7986132},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13050958.885661447,"samples":6525480},{"name":"DefineProperty (getter & configurable=false)","opsSec":15812705.345897585,"samples":7906353},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12750317.571087332,"samples":6375159},{"name":"DefineProperty (writable)","opsSec":15954462.921551816,"samples":7977232},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15819008.315887082,"samples":7909505},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15895176.807959987,"samples":7947589},{"name":"DefineProperties (getter)","opsSec":12863369.855857281,"samples":6431685},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12730976.201868564,"samples":6365489},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12882702.809227265,"samples":6441352}]}-->
