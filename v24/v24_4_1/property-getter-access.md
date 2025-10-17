## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|93,786,887|46893463|
|Getter|52,090,137|26051098|
|Method|99,065,288|49534339|
|DefineProperty (getter)|94,474,785|47237410|
|DefineProperty (getter & enumerable=false)|53,644,278|26873640|
|DefineProperty (getter & configurable=false)|95,150,879|47575572|
|DefineProperty (getter & enumerable=false & configurable=false)|51,680,028|25840020|
|DefineProperty (writable)|93,886,921|46943495|
|DefineProperty (writable & enumerable=false)|90,621,746|45352577|
|DefineProperty (writable & enumerable=false & configurable=false)|94,766,745|47383383|
|DefineProperties (getter)|53,810,424|26905217|
|DefineProperties (getter & enumerable=false)|52,419,481|26209748|
|DefineProperties (getter & enumerable=false & configurable=false)|53,958,620|27006882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:48:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":46893463,"opsSec":93786887.9225235},{"name":"Getter","samples":26051098,"opsSec":52090137.13325366},{"name":"Method","samples":49534339,"opsSec":99065288.38209271},{"name":"DefineProperty (getter)","samples":47237410,"opsSec":94474785.04432954},{"name":"DefineProperty (getter & enumerable=false)","samples":26873640,"opsSec":53644278.47920054},{"name":"DefineProperty (getter & configurable=false)","samples":47575572,"opsSec":95150879.67085627},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25840020,"opsSec":51680028.11359353},{"name":"DefineProperty (writable)","samples":46943495,"opsSec":93886921.27477363},{"name":"DefineProperty (writable & enumerable=false)","samples":45352577,"opsSec":90621746.46952341},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47383383,"opsSec":94766745.71991642},{"name":"DefineProperties (getter)","samples":26905217,"opsSec":53810424.74460694},{"name":"DefineProperties (getter & enumerable=false)","samples":26209748,"opsSec":52419481.8467399},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":27006882,"opsSec":53958620.017018445}]}-->
