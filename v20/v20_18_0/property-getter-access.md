## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|148,265,593|74132864|
|Getter|51,646,375|25823192|
|Method|97,946,824|48973419|
|DefineProperty (getter)|90,069,849|45034932|
|DefineProperty (getter & enumerable=false)|52,421,940|26210975|
|DefineProperty (getter & configurable=false)|100,569,791|50309062|
|DefineProperty (getter & enumerable=false & configurable=false)|52,392,813|26204187|
|DefineProperty (writable)|88,445,484|44238623|
|DefineProperty (writable & enumerable=false)|99,814,832|49907843|
|DefineProperty (writable & enumerable=false & configurable=false)|100,306,301|50153156|
|DefineProperties (getter)|52,275,398|26137761|
|DefineProperties (getter & enumerable=false)|50,151,395|25075722|
|DefineProperties (getter & enumerable=false & configurable=false)|51,276,475|25638245|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:53:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":148265593.3748412,"samples":74132864},{"name":"Getter","opsSec":51646375.323408954,"samples":25823192},{"name":"Method","opsSec":97946824.4833382,"samples":48973419},{"name":"DefineProperty (getter)","opsSec":90069849.76896374,"samples":45034932},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52421940.35436298,"samples":26210975},{"name":"DefineProperty (getter & configurable=false)","opsSec":100569791.5661504,"samples":50309062},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52392813.96296676,"samples":26204187},{"name":"DefineProperty (writable)","opsSec":88445484.87260032,"samples":44238623},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99814832.98243733,"samples":49907843},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100306301.36753204,"samples":50153156},{"name":"DefineProperties (getter)","opsSec":52275398.42095813,"samples":26137761},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50151395.75435728,"samples":25075722},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51276475.33492806,"samples":25638245}]}-->
