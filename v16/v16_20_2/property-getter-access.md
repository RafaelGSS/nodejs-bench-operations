## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|755,100,523|82|
|Getter|49,756,877|85|
|Method|756,635,645|83|
|DefineProperty (getter)|819,253,309|85|
|DefineProperty (getter & enumerable=false)|59,891,814|87|
|DefineProperty (getter & configurable=false)|823,201,481|86|
|DefineProperty (getter & enumerable=false & configurable=false)|57,291,857|85|
|DefineProperty (writable)|816,383,918|86|
|DefineProperty (writable & enumerable=false)|833,045,918|88|
|DefineProperty (writable & enumerable=false & configurable=false)|96,447,019|14|
|DefineProperties (getter)|37,344,020|85|
|DefineProperties (getter & enumerable=false)|36,472,401|84|
|DefineProperties (getter & enumerable=false & configurable=false)|37,567,734|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":755100523.3390785,"samples":10},{"name":"Getter","opsSec":49756876.79240223,"samples":6},{"name":"Method","opsSec":756635645.1575266,"samples":6},{"name":"DefineProperty (getter)","opsSec":819253308.5695103,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":59891814.24437717,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":823201480.8354009,"samples":5},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":57291856.5318115,"samples":5},{"name":"DefineProperty (writable)","opsSec":816383917.848456,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":833045917.9677566,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96447018.8624729,"samples":6},{"name":"DefineProperties (getter)","opsSec":37344019.69065468,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":36472400.94953971,"samples":4},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":37567734.02337541,"samples":8}]}-->
