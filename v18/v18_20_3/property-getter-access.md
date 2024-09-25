## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,763,252|7381627|
|Getter|12,216,328|6108165|
|Method|14,491,246|7245624|
|DefineProperty (getter)|14,770,033|7385017|
|DefineProperty (getter & enumerable=false)|12,369,502|6184752|
|DefineProperty (getter & configurable=false)|14,594,452|7297227|
|DefineProperty (getter & enumerable=false & configurable=false)|12,643,479|6321740|
|DefineProperty (writable)|14,413,643|7206822|
|DefineProperty (writable & enumerable=false)|14,281,745|7140873|
|DefineProperty (writable & enumerable=false & configurable=false)|14,620,979|7310490|
|DefineProperties (getter)|12,722,007|6361004|
|DefineProperties (getter & enumerable=false)|12,718,964|6359483|
|DefineProperties (getter & enumerable=false & configurable=false)|12,629,197|6314599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:57:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14763252.436423887,"samples":7381627},{"name":"Getter","opsSec":12216328.822536038,"samples":6108165},{"name":"Method","opsSec":14491246.499026084,"samples":7245624},{"name":"DefineProperty (getter)","opsSec":14770033.918016229,"samples":7385017},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12369502.437750187,"samples":6184752},{"name":"DefineProperty (getter & configurable=false)","opsSec":14594452.35094685,"samples":7297227},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12643479.43903148,"samples":6321740},{"name":"DefineProperty (writable)","opsSec":14413643.839129757,"samples":7206822},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14281745.16491556,"samples":7140873},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14620979.834963795,"samples":7310490},{"name":"DefineProperties (getter)","opsSec":12722007.757062599,"samples":6361004},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12718964.996689603,"samples":6359483},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12629197.58927596,"samples":6314599}]}-->
