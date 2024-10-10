## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|137,504,191|68863811|
|Setter|10,427,700|5213854|
|Method|97,100,860|48550524|
|DefineProperty (setter)|100,776,028|50389723|
|DefineProperty (setter & enumerable=false)|10,608,356|5304215|
|DefineProperty (setter & configurable=false)|10,350,058|5175113|
|DefineProperty (setter & enumerable=false & configurable=false)|10,599,346|5299766|
|DefineProperty (writable)|101,857,487|50955785|
|DefineProperty (writable & enumerable=false)|101,160,722|50590811|
|DefineProperty (writable & enumerable=false & configurable=false)|101,878,562|50940000|
|DefineProperties (setter)|94,433,662|47220225|
|DefineProperties (setter & enumerable=false)|10,310,172|5155128|
|DefineProperties (setter & enumerable=false & configurable=false)|10,215,425|5107716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":137504191.16476798,"samples":68863811},{"name":"Setter","opsSec":10427700.804886444,"samples":5213854},{"name":"Method","opsSec":97100860.98374175,"samples":48550524},{"name":"DefineProperty (setter)","opsSec":100776028.6848673,"samples":50389723},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10608356.675038664,"samples":5304215},{"name":"DefineProperty (setter & configurable=false)","opsSec":10350058.10135748,"samples":5175113},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10599346.108667945,"samples":5299766},{"name":"DefineProperty (writable)","opsSec":101857487.54469828,"samples":50955785},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101160722.39707422,"samples":50590811},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":101878562.08597471,"samples":50940000},{"name":"DefineProperties (setter)","opsSec":94433662.2972214,"samples":47220225},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10310172.405122139,"samples":5155128},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10215425.891175317,"samples":5107716}]}-->
