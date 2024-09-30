## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|140,447,776|70228312|
|Setter|11,167,319|5583663|
|Method|94,071,105|47208324|
|DefineProperty (setter)|100,652,363|50326191|
|DefineProperty (setter & enumerable=false)|11,021,230|5510618|
|DefineProperty (setter & configurable=false)|11,448,570|5724289|
|DefineProperty (setter & enumerable=false & configurable=false)|11,403,837|5702094|
|DefineProperty (writable)|100,788,101|50394174|
|DefineProperty (writable & enumerable=false)|100,225,000|50114945|
|DefineProperty (writable & enumerable=false & configurable=false)|99,128,129|49566761|
|DefineProperties (setter)|99,883,107|49946826|
|DefineProperties (setter & enumerable=false)|11,352,924|5676624|
|DefineProperties (setter & enumerable=false & configurable=false)|11,212,006|5606193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:35:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":140447776.35188094,"samples":70228312},{"name":"Setter","opsSec":11167319.589958556,"samples":5583663},{"name":"Method","opsSec":94071105.45103064,"samples":47208324},{"name":"DefineProperty (setter)","opsSec":100652363.68126981,"samples":50326191},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11021230.22487536,"samples":5510618},{"name":"DefineProperty (setter & configurable=false)","opsSec":11448570.558429137,"samples":5724289},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11403837.195160203,"samples":5702094},{"name":"DefineProperty (writable)","opsSec":100788101.06915238,"samples":50394174},{"name":"DefineProperty (writable & enumerable=false)","opsSec":100225000.42312935,"samples":50114945},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99128129.42975903,"samples":49566761},{"name":"DefineProperties (setter)","opsSec":99883107.93959346,"samples":49946826},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11352924.85034706,"samples":5676624},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11212006.989315731,"samples":5606193}]}-->
