## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|104,386,771|52193888|
|Setter|10,711,212|5356165|
|Method|97,526,903|48763460|
|DefineProperty (setter)|101,831,517|50948250|
|DefineProperty (setter & enumerable=false)|10,911,755|5458545|
|DefineProperty (setter & configurable=false)|11,039,943|5520467|
|DefineProperty (setter & enumerable=false & configurable=false)|11,118,770|5559388|
|DefineProperty (writable)|104,529,317|52265422|
|DefineProperty (writable & enumerable=false)|102,808,091|51404197|
|DefineProperty (writable & enumerable=false & configurable=false)|102,754,370|51386422|
|DefineProperties (setter)|97,842,637|48922172|
|DefineProperties (setter & enumerable=false)|10,947,908|5474423|
|DefineProperties (setter & enumerable=false & configurable=false)|11,039,078|5519543|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:21:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":52193888,"opsSec":104386771.17294069},{"name":"Setter","samples":5356165,"opsSec":10711212.841923015},{"name":"Method","samples":48763460,"opsSec":97526903.6154802},{"name":"DefineProperty (setter)","samples":50948250,"opsSec":101831517.64265758},{"name":"DefineProperty (setter & enumerable=false)","samples":5458545,"opsSec":10911755.242861766},{"name":"DefineProperty (setter & configurable=false)","samples":5520467,"opsSec":11039943.717048582},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5559388,"opsSec":11118770.974315519},{"name":"DefineProperty (writable)","samples":52265422,"opsSec":104529317.87195906},{"name":"DefineProperty (writable & enumerable=false)","samples":51404197,"opsSec":102808091.94982585},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51386422,"opsSec":102754370.81921412},{"name":"DefineProperties (setter)","samples":48922172,"opsSec":97842637.8200817},{"name":"DefineProperties (setter & enumerable=false)","samples":5474423,"opsSec":10947908.114607636},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5519543,"opsSec":11039078.868755052}]}-->
