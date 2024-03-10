## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|823,613,713|94|
|Getter|92,512,623|98|
|Method|823,278,185|93|
|DefineProperty (getter)|823,793,742|100|
|DefineProperty (getter & enumerable=false)|91,940,560|97|
|DefineProperty (getter & configurable=false)|823,845,217|98|
|DefineProperty (getter & enumerable=false & configurable=false)|92,658,665|96|
|DefineProperty (writable)|824,516,351|99|
|DefineProperty (writable & enumerable=false)|824,548,239|97|
|DefineProperty (writable & enumerable=false & configurable=false)|823,941,252|95|
|DefineProperties (getter)|92,594,018|99|
|DefineProperties (getter & enumerable=false)|73,705,927|79|
|DefineProperties (getter & enumerable=false & configurable=false)|57,520,211|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":823613712.550716,"samples":6},{"name":"Getter","opsSec":92512623.11552542,"samples":6},{"name":"Method","opsSec":823278185.181202,"samples":7},{"name":"DefineProperty (getter)","opsSec":823793741.9021515,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91940560.49344286,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":823845216.9665765,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":92658664.59539141,"samples":6},{"name":"DefineProperty (writable)","opsSec":824516351.2366297,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":824548238.5259992,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":823941251.5587251,"samples":6},{"name":"DefineProperties (getter)","opsSec":92594017.61917901,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":73705926.6710758,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":57520210.59446078,"samples":5}]}-->
