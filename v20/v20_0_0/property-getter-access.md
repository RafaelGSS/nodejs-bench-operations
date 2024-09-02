## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,942,838|7471420|
|Getter|12,802,334|6401168|
|Method|14,936,176|7468089|
|DefineProperty (getter)|14,605,468|7302735|
|DefineProperty (getter & enumerable=false)|12,571,945|6285973|
|DefineProperty (getter & configurable=false)|14,705,492|7352747|
|DefineProperty (getter & enumerable=false & configurable=false)|12,227,064|6113533|
|DefineProperty (writable)|14,787,257|7393629|
|DefineProperty (writable & enumerable=false)|14,635,561|7317781|
|DefineProperty (writable & enumerable=false & configurable=false)|14,675,402|7337702|
|DefineProperties (getter)|12,692,237|6346119|
|DefineProperties (getter & enumerable=false)|12,699,475|6349738|
|DefineProperties (getter & enumerable=false & configurable=false)|12,724,286|6362144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:23:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14942838.590136794,"samples":7471420},{"name":"Getter","opsSec":12802334.399728803,"samples":6401168},{"name":"Method","opsSec":14936176.84159764,"samples":7468089},{"name":"DefineProperty (getter)","opsSec":14605468.625504417,"samples":7302735},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12571945.447638078,"samples":6285973},{"name":"DefineProperty (getter & configurable=false)","opsSec":14705492.434652608,"samples":7352747},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12227064.286341827,"samples":6113533},{"name":"DefineProperty (writable)","opsSec":14787257.9732278,"samples":7393629},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14635561.64086546,"samples":7317781},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14675402.568243839,"samples":7337702},{"name":"DefineProperties (getter)","opsSec":12692237.190291159,"samples":6346119},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12699475.69012452,"samples":6349738},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12724286.794291323,"samples":6362144}]}-->
