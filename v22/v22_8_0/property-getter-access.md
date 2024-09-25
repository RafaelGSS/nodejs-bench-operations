## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,989,301|7494651|
|Getter|12,029,443|6014722|
|Method|14,247,347|7123674|
|DefineProperty (getter)|14,031,532|7015767|
|DefineProperty (getter & enumerable=false)|12,028,446|6014332|
|DefineProperty (getter & configurable=false)|14,478,516|7239259|
|DefineProperty (getter & enumerable=false & configurable=false)|12,592,022|6296012|
|DefineProperty (writable)|14,638,395|7319198|
|DefineProperty (writable & enumerable=false)|14,658,071|7329036|
|DefineProperty (writable & enumerable=false & configurable=false)|14,842,720|7421361|
|DefineProperties (getter)|12,682,061|6341031|
|DefineProperties (getter & enumerable=false)|12,697,216|6348609|
|DefineProperties (getter & enumerable=false & configurable=false)|12,697,950|6348976|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:15:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14989301.13050987,"samples":7494651},{"name":"Getter","opsSec":12029443.927604323,"samples":6014722},{"name":"Method","opsSec":14247347.174048748,"samples":7123674},{"name":"DefineProperty (getter)","opsSec":14031532.90560928,"samples":7015767},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12028446.694150763,"samples":6014332},{"name":"DefineProperty (getter & configurable=false)","opsSec":14478516.233873248,"samples":7239259},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12592022.992756557,"samples":6296012},{"name":"DefineProperty (writable)","opsSec":14638395.73597305,"samples":7319198},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14658071.355769018,"samples":7329036},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14842720.278632646,"samples":7421361},{"name":"DefineProperties (getter)","opsSec":12682061.51785801,"samples":6341031},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12697216.628214937,"samples":6348609},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12697950.958491053,"samples":6348976}]}-->
