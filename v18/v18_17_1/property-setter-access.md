## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|574,432,109|95|
|Setter|8,478,350|98|
|Method|579,424,153|99|
|DefineProperty (setter)|581,694,744|97|
|DefineProperty (setter & enumerable=false)|8,320,480|98|
|DefineProperty (setter & configurable=false)|8,546,883|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,380,402|97|
|DefineProperty (writable)|591,992,814|98|
|DefineProperty (writable & enumerable=false)|591,969,194|98|
|DefineProperty (writable & enumerable=false & configurable=false)|161,088,182|28|
|DefineProperties (setter)|85,817,780|78|
|DefineProperties (setter & enumerable=false)|8,112,184|98|
|DefineProperties (setter & enumerable=false & configurable=false)|8,446,178|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":574432108.930753,"samples":7},{"name":"Setter","opsSec":8478349.653379401,"samples":8},{"name":"Method","opsSec":579424153.2007114,"samples":9},{"name":"DefineProperty (setter)","opsSec":581694744.1954932,"samples":10},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8320480.360345151,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":8546882.718272807,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8380401.969373344,"samples":7},{"name":"DefineProperty (writable)","opsSec":591992813.8743993,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":591969193.7759646,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":161088182.05958992,"samples":7},{"name":"DefineProperties (setter)","opsSec":85817779.70074746,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8112183.673647817,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8446178.352311116,"samples":5}]}-->
