## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|102,027,089|51013553|
|Setter|10,923,129|5461847|
|Method|103,129,230|51570615|
|DefineProperty (setter)|98,039,892|49020594|
|DefineProperty (setter & enumerable=false)|10,865,104|5438602|
|DefineProperty (setter & configurable=false)|10,981,515|5490762|
|DefineProperty (setter & enumerable=false & configurable=false)|10,969,224|5484614|
|DefineProperty (writable)|101,169,486|50589527|
|DefineProperty (writable & enumerable=false)|100,314,850|50157439|
|DefineProperty (writable & enumerable=false & configurable=false)|101,102,314|50556390|
|DefineProperties (setter)|98,725,793|49368133|
|DefineProperties (setter & enumerable=false)|10,662,406|5331207|
|DefineProperties (setter & enumerable=false & configurable=false)|11,024,061|5512217|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:21:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":51013553,"opsSec":102027089.4716115},{"name":"Setter","samples":5461847,"opsSec":10923129.339751912},{"name":"Method","samples":51570615,"opsSec":103129230.29527977},{"name":"DefineProperty (setter)","samples":49020594,"opsSec":98039892.1087061},{"name":"DefineProperty (setter & enumerable=false)","samples":5438602,"opsSec":10865104.988498379},{"name":"DefineProperty (setter & configurable=false)","samples":5490762,"opsSec":10981515.566196045},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5484614,"opsSec":10969224.775047917},{"name":"DefineProperty (writable)","samples":50589527,"opsSec":101169486.19935115},{"name":"DefineProperty (writable & enumerable=false)","samples":50157439,"opsSec":100314850.51373096},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50556390,"opsSec":101102314.69720107},{"name":"DefineProperties (setter)","samples":49368133,"opsSec":98725793.56272204},{"name":"DefineProperties (setter & enumerable=false)","samples":5331207,"opsSec":10662406.962811405},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5512217,"opsSec":11024061.80562532}]}-->
