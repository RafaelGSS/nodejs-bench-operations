## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|865,817,046|97|
|Setter|13,844,834|97|
|Method|867,612,698|99|
|DefineProperty (setter)|867,893,189|94|
|DefineProperty (setter & enumerable=false)|13,771,726|97|
|DefineProperty (setter & configurable=false)|13,803,443|97|
|DefineProperty (setter & enumerable=false & configurable=false)|13,861,708|97|
|DefineProperty (writable)|839,915,348|97|
|DefineProperty (writable & enumerable=false)|870,128,320|94|
|DefineProperty (writable & enumerable=false & configurable=false)|869,135,689|98|
|DefineProperties (setter)|869,217,276|99|
|DefineProperties (setter & enumerable=false)|13,129,782|93|
|DefineProperties (setter & enumerable=false & configurable=false)|12,689,054|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:05:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":865817046.0675571,"samples":8},{"name":"Setter","opsSec":13844833.923152635,"samples":5},{"name":"Method","opsSec":867612698.2399642,"samples":6},{"name":"DefineProperty (setter)","opsSec":867893188.988122,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":13771725.937079318,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":13803442.650033886,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13861707.76788576,"samples":8},{"name":"DefineProperty (writable)","opsSec":839915347.9429386,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":870128319.7263442,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":869135689.3316886,"samples":7},{"name":"DefineProperties (setter)","opsSec":869217276.0918585,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":13129782.390579179,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12689053.63259714,"samples":6}]}-->
