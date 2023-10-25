## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|617,535,544|87|
|Setter|6,430,351|85|
|Method|628,538,618|91|
|DefineProperty (setter)|619,955,158|90|
|DefineProperty (setter & enumerable=false)|6,390,792|88|
|DefineProperty (setter & configurable=false)|6,520,821|87|
|DefineProperty (setter & enumerable=false & configurable=false)|6,572,538|90|
|DefineProperty (writable)|761,112,483|92|
|DefineProperty (writable & enumerable=false)|758,465,377|92|
|DefineProperty (writable & enumerable=false & configurable=false)|573,617,892|75|
|DefineProperties (setter)|66,709,904|85|
|DefineProperties (setter & enumerable=false)|6,104,439|90|
|DefineProperties (setter & enumerable=false & configurable=false)|6,618,681|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":617535543.8778534,"samples":7},{"name":"Setter","opsSec":6430350.804957201,"samples":6},{"name":"Method","opsSec":628538617.5341756,"samples":7},{"name":"DefineProperty (setter)","opsSec":619955158.4211285,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6390791.893711156,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":6520821.422938814,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6572538.259808791,"samples":5},{"name":"DefineProperty (writable)","opsSec":761112483.175211,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":758465376.6450381,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":573617891.9293934,"samples":7},{"name":"DefineProperties (setter)","opsSec":66709904.487724155,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6104438.769164252,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6618680.708586776,"samples":5}]}-->
