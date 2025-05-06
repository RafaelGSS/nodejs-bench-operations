## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|97,821,074|48948923|
|Setter|11,266,396|5633200|
|Method|94,633,692|47316853|
|DefineProperty (setter)|100,879,954|50439985|
|DefineProperty (setter & enumerable=false)|11,036,108|5518056|
|DefineProperty (setter & configurable=false)|11,505,931|5759017|
|DefineProperty (setter & enumerable=false & configurable=false)|11,667,102|5835209|
|DefineProperty (writable)|100,817,233|50409221|
|DefineProperty (writable & enumerable=false)|97,923,892|48966667|
|DefineProperty (writable & enumerable=false & configurable=false)|101,143,165|50585246|
|DefineProperties (setter)|87,852,894|44113034|
|DefineProperties (setter & enumerable=false)|11,384,302|5692270|
|DefineProperties (setter & enumerable=false & configurable=false)|10,805,090|5402546|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:29:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":48948923,"opsSec":97821074.84660748},{"name":"Setter","samples":5633200,"opsSec":11266396.732744947},{"name":"Method","samples":47316853,"opsSec":94633692.18348093},{"name":"DefineProperty (setter)","samples":50439985,"opsSec":100879954.86800677},{"name":"DefineProperty (setter & enumerable=false)","samples":5518056,"opsSec":11036108.887817293},{"name":"DefineProperty (setter & configurable=false)","samples":5759017,"opsSec":11505931.210114291},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5835209,"opsSec":11667102.139569324},{"name":"DefineProperty (writable)","samples":50409221,"opsSec":100817233.20137392},{"name":"DefineProperty (writable & enumerable=false)","samples":48966667,"opsSec":97923892.17831616},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50585246,"opsSec":101143165.94856934},{"name":"DefineProperties (setter)","samples":44113034,"opsSec":87852894.73192982},{"name":"DefineProperties (setter & enumerable=false)","samples":5692270,"opsSec":11384302.341304323},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5402546,"opsSec":10805090.379236443}]}-->
