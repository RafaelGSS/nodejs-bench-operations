## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|103,453,040|51726586|
|Setter|11,008,235|5505005|
|Method|102,773,261|51399517|
|DefineProperty (setter)|102,725,162|51369314|
|DefineProperty (setter & enumerable=false)|10,829,516|5414760|
|DefineProperty (setter & configurable=false)|11,026,129|5513069|
|DefineProperty (setter & enumerable=false & configurable=false)|10,894,647|5447325|
|DefineProperty (writable)|101,805,973|50903819|
|DefineProperty (writable & enumerable=false)|99,400,976|49700508|
|DefineProperty (writable & enumerable=false & configurable=false)|98,079,115|49044466|
|DefineProperties (setter)|95,628,529|47814276|
|DefineProperties (setter & enumerable=false)|11,057,922|5528964|
|DefineProperties (setter & enumerable=false & configurable=false)|10,914,187|5457097|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:19:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":51726586,"opsSec":103453040.82154423},{"name":"Setter","samples":5505005,"opsSec":11008235.494454764},{"name":"Method","samples":51399517,"opsSec":102773261.9601913},{"name":"DefineProperty (setter)","samples":51369314,"opsSec":102725162.37481527},{"name":"DefineProperty (setter & enumerable=false)","samples":5414760,"opsSec":10829516.03639713},{"name":"DefineProperty (setter & configurable=false)","samples":5513069,"opsSec":11026129.70835046},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5447325,"opsSec":10894647.71212398},{"name":"DefineProperty (writable)","samples":50903819,"opsSec":101805973.67594235},{"name":"DefineProperty (writable & enumerable=false)","samples":49700508,"opsSec":99400976.23960951},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49044466,"opsSec":98079115.06521489},{"name":"DefineProperties (setter)","samples":47814276,"opsSec":95628529.62292406},{"name":"DefineProperties (setter & enumerable=false)","samples":5528964,"opsSec":11057922.050837936},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5457097,"opsSec":10914187.495144254}]}-->
