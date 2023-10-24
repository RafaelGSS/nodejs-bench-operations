## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|577,028,206|82|
|Setter|6,919,829|88|
|Method|608,255,171|85|
|DefineProperty (setter)|601,753,892|84|
|DefineProperty (setter & enumerable=false)|6,699,664|88|
|DefineProperty (setter & configurable=false)|7,156,988|86|
|DefineProperty (setter & enumerable=false & configurable=false)|7,030,551|88|
|DefineProperty (writable)|601,977,805|87|
|DefineProperty (writable & enumerable=false)|547,022,888|88|
|DefineProperty (writable & enumerable=false & configurable=false)|578,918,859|82|
|DefineProperties (setter)|613,611,043|90|
|DefineProperties (setter & enumerable=false)|6,858,369|88|
|DefineProperties (setter & enumerable=false & configurable=false)|6,690,608|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":577028205.5777212,"samples":6},{"name":"Setter","opsSec":6919828.681451643,"samples":5},{"name":"Method","opsSec":608255171.4853059,"samples":7},{"name":"DefineProperty (setter)","opsSec":601753891.741546,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6699663.94107509,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":7156988.354810344,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7030551.086212336,"samples":4},{"name":"DefineProperty (writable)","opsSec":601977805.4980131,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":547022888.0012769,"samples":4},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":578918859.1201353,"samples":7},{"name":"DefineProperties (setter)","opsSec":613611042.9650189,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6858369.186606696,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6690607.981309037,"samples":6}]}-->
