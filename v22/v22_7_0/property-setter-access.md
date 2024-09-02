## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,443,238|7221620|
|Setter|5,913,462|2956732|
|Method|13,920,092|6960047|
|DefineProperty (setter)|14,180,613|7090307|
|DefineProperty (setter & enumerable=false)|5,966,270|2983136|
|DefineProperty (setter & configurable=false)|6,066,860|3033431|
|DefineProperty (setter & enumerable=false & configurable=false)|6,032,312|3016157|
|DefineProperty (writable)|14,076,283|7038142|
|DefineProperty (writable & enumerable=false)|15,082,126|7541064|
|DefineProperty (writable & enumerable=false & configurable=false)|14,142,344|7071173|
|DefineProperties (setter)|14,023,053|7011527|
|DefineProperties (setter & enumerable=false)|5,831,045|2915523|
|DefineProperties (setter & enumerable=false & configurable=false)|5,766,061|2883031|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:59:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14443238.844646009,"samples":7221620},{"name":"Setter","opsSec":5913462.237861661,"samples":2956732},{"name":"Method","opsSec":13920092.663338246,"samples":6960047},{"name":"DefineProperty (setter)","opsSec":14180613.262615083,"samples":7090307},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5966270.234051133,"samples":2983136},{"name":"DefineProperty (setter & configurable=false)","opsSec":6066860.980856353,"samples":3033431},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6032312.455861004,"samples":3016157},{"name":"DefineProperty (writable)","opsSec":14076283.436879646,"samples":7038142},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15082126.189846419,"samples":7541064},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14142344.133530987,"samples":7071173},{"name":"DefineProperties (setter)","opsSec":14023053.775619227,"samples":7011527},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5831045.335023443,"samples":2915523},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5766061.042330352,"samples":2883031}]}-->
