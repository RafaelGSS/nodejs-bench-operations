## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,750,169|7875086|
|Setter|6,813,893|3406948|
|Method|16,008,473|8004237|
|DefineProperty (setter)|16,032,045|8016023|
|DefineProperty (setter & enumerable=false)|6,937,110|3468556|
|DefineProperty (setter & configurable=false)|6,958,285|3479143|
|DefineProperty (setter & enumerable=false & configurable=false)|6,488,839|3244420|
|DefineProperty (writable)|15,948,123|7974062|
|DefineProperty (writable & enumerable=false)|15,910,866|7955434|
|DefineProperty (writable & enumerable=false & configurable=false)|15,924,815|7962408|
|DefineProperties (setter)|15,879,229|7939615|
|DefineProperties (setter & enumerable=false)|6,608,576|3304289|
|DefineProperties (setter & enumerable=false & configurable=false)|6,525,841|3262921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:52:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15750169.920971038,"samples":7875086},{"name":"Setter","opsSec":6813893.724158936,"samples":3406948},{"name":"Method","opsSec":16008473.583733656,"samples":8004237},{"name":"DefineProperty (setter)","opsSec":16032045.679292021,"samples":8016023},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6937110.459968882,"samples":3468556},{"name":"DefineProperty (setter & configurable=false)","opsSec":6958285.791253026,"samples":3479143},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6488839.506843167,"samples":3244420},{"name":"DefineProperty (writable)","opsSec":15948123.425970057,"samples":7974062},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15910866.504361141,"samples":7955434},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15924815.39498415,"samples":7962408},{"name":"DefineProperties (setter)","opsSec":15879229.555360394,"samples":7939615},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6608576.9558843,"samples":3304289},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6525841.399553064,"samples":3262921}]}-->
