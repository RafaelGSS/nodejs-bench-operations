## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|593,093,535|86|
|Setter|7,604,881|88|
|Method|576,337,465|86|
|DefineProperty (setter)|582,656,703|86|
|DefineProperty (setter & enumerable=false)|7,256,361|85|
|DefineProperty (setter & configurable=false)|7,413,311|88|
|DefineProperty (setter & enumerable=false & configurable=false)|7,443,291|86|
|DefineProperty (writable)|585,789,305|85|
|DefineProperty (writable & enumerable=false)|590,540,457|88|
|DefineProperty (writable & enumerable=false & configurable=false)|582,345,311|87|
|DefineProperties (setter)|598,746,740|83|
|DefineProperties (setter & enumerable=false)|7,422,245|88|
|DefineProperties (setter & enumerable=false & configurable=false)|7,059,010|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":593093534.9470458,"samples":7},{"name":"Setter","opsSec":7604880.518048989,"samples":6},{"name":"Method","opsSec":576337465.0854015,"samples":6},{"name":"DefineProperty (setter)","opsSec":582656702.8990158,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7256361.125352645,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7413310.760788249,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7443290.817821324,"samples":7},{"name":"DefineProperty (writable)","opsSec":585789305.3164841,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":590540457.1769882,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":582345310.5003357,"samples":6},{"name":"DefineProperties (setter)","opsSec":598746739.62692,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7422244.663715215,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7059010.420402402,"samples":5}]}-->
