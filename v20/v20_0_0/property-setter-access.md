## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|869,462,132|96|
|Setter|13,008,368|96|
|Method|871,923,940|97|
|DefineProperty (setter)|871,454,023|98|
|DefineProperty (setter & enumerable=false)|13,076,051|95|
|DefineProperty (setter & configurable=false)|13,158,508|98|
|DefineProperty (setter & enumerable=false & configurable=false)|13,086,871|96|
|DefineProperty (writable)|871,237,927|97|
|DefineProperty (writable & enumerable=false)|872,527,590|98|
|DefineProperty (writable & enumerable=false & configurable=false)|839,953,118|95|
|DefineProperties (setter)|876,178,079|95|
|DefineProperties (setter & enumerable=false)|13,182,400|97|
|DefineProperties (setter & enumerable=false & configurable=false)|12,485,305|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:01:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":869462131.6381599,"samples":5},{"name":"Setter","opsSec":13008368.076064505,"samples":4},{"name":"Method","opsSec":871923940.012955,"samples":6},{"name":"DefineProperty (setter)","opsSec":871454022.5063307,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":13076050.93528155,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":13158507.753082706,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13086871.262462363,"samples":6},{"name":"DefineProperty (writable)","opsSec":871237927.2451229,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":872527590.4826556,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":839953118.1206075,"samples":6},{"name":"DefineProperties (setter)","opsSec":876178078.8027428,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":13182399.722063629,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12485305.386217084,"samples":5}]}-->
