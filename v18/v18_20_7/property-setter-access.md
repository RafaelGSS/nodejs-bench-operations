## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|104,529,894|52264956|
|Setter|10,901,325|5450753|
|Method|103,066,545|51534050|
|DefineProperty (setter)|104,930,323|52466295|
|DefineProperty (setter & enumerable=false)|10,897,792|5448903|
|DefineProperty (setter & configurable=false)|10,742,921|5374689|
|DefineProperty (setter & enumerable=false & configurable=false)|10,823,397|5411703|
|DefineProperty (writable)|91,882,808|45941416|
|DefineProperty (writable & enumerable=false)|101,850,961|50925498|
|DefineProperty (writable & enumerable=false & configurable=false)|99,028,668|49514904|
|DefineProperties (setter)|98,797,580|49402064|
|DefineProperties (setter & enumerable=false)|10,559,682|5280073|
|DefineProperties (setter & enumerable=false & configurable=false)|10,409,376|5204693|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:00:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":52264956,"opsSec":104529894.43897775},{"name":"Setter","samples":5450753,"opsSec":10901325.56125931},{"name":"Method","samples":51534050,"opsSec":103066545.34423004},{"name":"DefineProperty (setter)","samples":52466295,"opsSec":104930323.08530006},{"name":"DefineProperty (setter & enumerable=false)","samples":5448903,"opsSec":10897792.094417287},{"name":"DefineProperty (setter & configurable=false)","samples":5374689,"opsSec":10742921.482703052},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5411703,"opsSec":10823397.471162794},{"name":"DefineProperty (writable)","samples":45941416,"opsSec":91882808.29423545},{"name":"DefineProperty (writable & enumerable=false)","samples":50925498,"opsSec":101850961.37067313},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49514904,"opsSec":99028668.57613935},{"name":"DefineProperties (setter)","samples":49402064,"opsSec":98797580.88191012},{"name":"DefineProperties (setter & enumerable=false)","samples":5280073,"opsSec":10559682.282112265},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5204693,"opsSec":10409376.75647344}]}-->
