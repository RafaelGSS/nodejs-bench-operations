## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|90,905,129|45452569|
|Setter|11,039,145|5528275|
|Method|91,763,788|45882892|
|DefineProperty (setter)|90,404,639|45202326|
|DefineProperty (setter & enumerable=false)|11,006,188|5503096|
|DefineProperty (setter & configurable=false)|11,099,400|5551349|
|DefineProperty (setter & enumerable=false & configurable=false)|11,141,552|5571374|
|DefineProperty (writable)|88,993,065|44496539|
|DefineProperty (writable & enumerable=false)|90,745,223|45373441|
|DefineProperty (writable & enumerable=false & configurable=false)|90,181,505|45096309|
|DefineProperties (setter)|87,681,021|44105120|
|DefineProperties (setter & enumerable=false)|10,828,111|5424934|
|DefineProperties (setter & enumerable=false & configurable=false)|11,007,960|5503982|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:30:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":45452569,"opsSec":90905129.63672806},{"name":"Setter","samples":5528275,"opsSec":11039145.94743877},{"name":"Method","samples":45882892,"opsSec":91763788.68817875},{"name":"DefineProperty (setter)","samples":45202326,"opsSec":90404639.704969},{"name":"DefineProperty (setter & enumerable=false)","samples":5503096,"opsSec":11006188.01575994},{"name":"DefineProperty (setter & configurable=false)","samples":5551349,"opsSec":11099400.878571417},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5571374,"opsSec":11141552.288608387},{"name":"DefineProperty (writable)","samples":44496539,"opsSec":88993065.36298472},{"name":"DefineProperty (writable & enumerable=false)","samples":45373441,"opsSec":90745223.54029457},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45096309,"opsSec":90181505.47416945},{"name":"DefineProperties (setter)","samples":44105120,"opsSec":87681021.7281728},{"name":"DefineProperties (setter & enumerable=false)","samples":5424934,"opsSec":10828111.876087656},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5503982,"opsSec":11007960.235277599}]}-->
