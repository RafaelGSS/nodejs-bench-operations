## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|398,887,414|94|
|Setter|6,709,546|94|
|Method|396,835,453|93|
|DefineProperty (setter)|397,492,607|93|
|DefineProperty (setter & enumerable=false)|6,646,897|95|
|DefineProperty (setter & configurable=false)|6,613,683|93|
|DefineProperty (setter & enumerable=false & configurable=false)|6,658,796|94|
|DefineProperty (writable)|401,546,125|96|
|DefineProperty (writable & enumerable=false)|407,044,355|92|
|DefineProperty (writable & enumerable=false & configurable=false)|383,117,720|95|
|DefineProperties (setter)|54,110,280|84|
|DefineProperties (setter & enumerable=false)|6,612,134|91|
|DefineProperties (setter & enumerable=false & configurable=false)|6,729,706|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":398887414.06453884,"samples":7},{"name":"Setter","opsSec":6709546.4369349675,"samples":5},{"name":"Method","opsSec":396835452.88335323,"samples":6},{"name":"DefineProperty (setter)","opsSec":397492606.9394934,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6646897.207536822,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":6613682.504492846,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6658795.5126007665,"samples":5},{"name":"DefineProperty (writable)","opsSec":401546124.55719733,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":407044354.65217626,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":383117720.0894202,"samples":6},{"name":"DefineProperties (setter)","opsSec":54110279.50533904,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6612134.362026056,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6729705.77040094,"samples":5}]}-->
