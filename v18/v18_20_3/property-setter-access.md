## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,136,431|7068216|
|Setter|5,644,295|2822148|
|Method|14,742,309|7371155|
|DefineProperty (setter)|14,220,813|7110407|
|DefineProperty (setter & enumerable=false)|5,694,008|2847005|
|DefineProperty (setter & configurable=false)|5,631,401|2815701|
|DefineProperty (setter & enumerable=false & configurable=false)|5,521,256|2760629|
|DefineProperty (writable)|14,013,013|7006507|
|DefineProperty (writable & enumerable=false)|14,020,819|7010410|
|DefineProperty (writable & enumerable=false & configurable=false)|14,014,889|7007450|
|DefineProperties (setter)|14,074,943|7037472|
|DefineProperties (setter & enumerable=false)|5,577,030|2788516|
|DefineProperties (setter & enumerable=false & configurable=false)|5,574,208|2787105|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:22:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14136431.279421607,"samples":7068216},{"name":"Setter","opsSec":5644295.407174943,"samples":2822148},{"name":"Method","opsSec":14742309.13463531,"samples":7371155},{"name":"DefineProperty (setter)","opsSec":14220813.509330189,"samples":7110407},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5694008.206094027,"samples":2847005},{"name":"DefineProperty (setter & configurable=false)","opsSec":5631401.279615698,"samples":2815701},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5521256.162985028,"samples":2760629},{"name":"DefineProperty (writable)","opsSec":14013013.83363049,"samples":7006507},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14020819.49915097,"samples":7010410},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14014889.74886707,"samples":7007450},{"name":"DefineProperties (setter)","opsSec":14074943.11288186,"samples":7037472},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5577030.1965759685,"samples":2788516},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5574208.577497862,"samples":2787105}]}-->
