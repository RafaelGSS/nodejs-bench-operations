## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|103,432,510|51716262|
|Setter|11,642,237|5821120|
|Method|98,998,271|50028145|
|DefineProperty (setter)|102,500,884|51284971|
|DefineProperty (setter & enumerable=false)|11,758,237|5879122|
|DefineProperty (setter & configurable=false)|11,591,783|5795895|
|DefineProperty (setter & enumerable=false & configurable=false)|11,633,219|5816610|
|DefineProperty (writable)|102,295,626|51204787|
|DefineProperty (writable & enumerable=false)|96,885,531|48486356|
|DefineProperty (writable & enumerable=false & configurable=false)|103,744,602|51872452|
|DefineProperties (setter)|97,082,669|48580058|
|DefineProperties (setter & enumerable=false)|11,608,715|5804560|
|DefineProperties (setter & enumerable=false & configurable=false)|11,750,149|5878369|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:24:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":51716262,"opsSec":103432510.14004365},{"name":"Setter","samples":5821120,"opsSec":11642237.671552466},{"name":"Method","samples":50028145,"opsSec":98998271.31883737},{"name":"DefineProperty (setter)","samples":51284971,"opsSec":102500884.07936922},{"name":"DefineProperty (setter & enumerable=false)","samples":5879122,"opsSec":11758237.956265692},{"name":"DefineProperty (setter & configurable=false)","samples":5795895,"opsSec":11591783.902721668},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5816610,"opsSec":11633219.90693424},{"name":"DefineProperty (writable)","samples":51204787,"opsSec":102295626.90119477},{"name":"DefineProperty (writable & enumerable=false)","samples":48486356,"opsSec":96885531.68579422},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51872452,"opsSec":103744602.93316227},{"name":"DefineProperties (setter)","samples":48580058,"opsSec":97082669.465426},{"name":"DefineProperties (setter & enumerable=false)","samples":5804560,"opsSec":11608715.784516383},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5878369,"opsSec":11750149.691068217}]}-->
