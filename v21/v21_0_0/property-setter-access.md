## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,344,656|8172329|
|Setter|6,665,790|3332896|
|Method|16,106,981|8053491|
|DefineProperty (setter)|16,116,439|8058220|
|DefineProperty (setter & enumerable=false)|6,668,063|3334032|
|DefineProperty (setter & configurable=false)|6,680,722|3340362|
|DefineProperty (setter & enumerable=false & configurable=false)|6,762,016|3381009|
|DefineProperty (writable)|16,273,574|8136788|
|DefineProperty (writable & enumerable=false)|16,312,717|8156359|
|DefineProperty (writable & enumerable=false & configurable=false)|16,125,476|8062739|
|DefineProperties (setter)|16,262,158|8131080|
|DefineProperties (setter & enumerable=false)|6,310,602|3155302|
|DefineProperties (setter & enumerable=false & configurable=false)|6,582,782|3291392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:49:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16344656.153127318,"samples":8172329},{"name":"Setter","opsSec":6665790.7495346945,"samples":3332896},{"name":"Method","opsSec":16106981.809519896,"samples":8053491},{"name":"DefineProperty (setter)","opsSec":16116439.805745704,"samples":8058220},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6668063.968663742,"samples":3334032},{"name":"DefineProperty (setter & configurable=false)","opsSec":6680722.192486127,"samples":3340362},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6762016.78666296,"samples":3381009},{"name":"DefineProperty (writable)","opsSec":16273574.17010127,"samples":8136788},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16312717.583758565,"samples":8156359},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16125476.307679385,"samples":8062739},{"name":"DefineProperties (setter)","opsSec":16262158.48843695,"samples":8131080},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6310602.370238898,"samples":3155302},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6582782.38134969,"samples":3291392}]}-->
