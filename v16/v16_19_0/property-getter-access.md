## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|709,911,360|96|
|Getter|59,497,715|96|
|Method|712,502,146|97|
|DefineProperty (getter)|711,197,365|98|
|DefineProperty (getter & enumerable=false)|59,355,020|92|
|DefineProperty (getter & configurable=false)|713,027,927|96|
|DefineProperty (getter & enumerable=false & configurable=false)|58,664,152|93|
|DefineProperty (writable)|712,495,558|92|
|DefineProperty (writable & enumerable=false)|712,064,055|97|
|DefineProperty (writable & enumerable=false & configurable=false)|84,524,307|16|
|DefineProperties (getter)|37,586,955|90|
|DefineProperties (getter & enumerable=false)|59,427,792|93|
|DefineProperties (getter & enumerable=false & configurable=false)|59,553,638|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":709911360.0692308,"samples":7},{"name":"Getter","opsSec":59497714.81441923,"samples":6},{"name":"Method","opsSec":712502145.8603761,"samples":6},{"name":"DefineProperty (getter)","opsSec":711197365.4221252,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":59355019.827212185,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":713027927.4339958,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":58664152.04494845,"samples":5},{"name":"DefineProperty (writable)","opsSec":712495557.9162419,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":712064055.3429118,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":84524307.19534169,"samples":12},{"name":"DefineProperties (getter)","opsSec":37586955.141084395,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":59427791.73869281,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":59553637.92263577,"samples":6}]}-->
