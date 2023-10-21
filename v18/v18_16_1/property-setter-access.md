## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|722,401,359|85|
|Setter|7,347,921|82|
|Method|719,170,852|88|
|DefineProperty (setter)|711,462,801|89|
|DefineProperty (setter & enumerable=false)|7,719,247|88|
|DefineProperty (setter & configurable=false)|7,495,436|88|
|DefineProperty (setter & enumerable=false & configurable=false)|7,602,385|87|
|DefineProperty (writable)|873,239,178|86|
|DefineProperty (writable & enumerable=false)|827,958,027|85|
|DefineProperty (writable & enumerable=false & configurable=false)|845,577,939|84|
|DefineProperties (setter)|264,944,272|31|
|DefineProperties (setter & enumerable=false)|6,734,649|87|
|DefineProperties (setter & enumerable=false & configurable=false)|7,640,755|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":722401358.8788862,"samples":8},{"name":"Setter","opsSec":7347921.031756191,"samples":6},{"name":"Method","opsSec":719170852.454637,"samples":6},{"name":"DefineProperty (setter)","opsSec":711462800.7746809,"samples":5},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7719247.418144033,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7495436.27566757,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7602384.757184169,"samples":4},{"name":"DefineProperty (writable)","opsSec":873239178.0590935,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":827958027.2792022,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":845577938.7472682,"samples":6},{"name":"DefineProperties (setter)","opsSec":264944271.629466,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6734649.394204471,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7640754.691676607,"samples":5}]}-->
