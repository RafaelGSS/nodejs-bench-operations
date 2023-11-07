## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|844,076,474|97|
|Setter|12,884,458|100|
|Method|848,023,097|100|
|DefineProperty (setter)|848,244,993|96|
|DefineProperty (setter & enumerable=false)|12,867,167|99|
|DefineProperty (setter & configurable=false)|12,937,380|98|
|DefineProperty (setter & enumerable=false & configurable=false)|13,035,621|99|
|DefineProperty (writable)|849,363,834|98|
|DefineProperty (writable & enumerable=false)|822,182,996|97|
|DefineProperty (writable & enumerable=false & configurable=false)|849,658,911|100|
|DefineProperties (setter)|848,793,913|95|
|DefineProperties (setter & enumerable=false)|12,158,272|92|
|DefineProperties (setter & enumerable=false & configurable=false)|11,778,631|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:29:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":844076473.6376282,"samples":6},{"name":"Setter","opsSec":12884457.90171914,"samples":5},{"name":"Method","opsSec":848023097.1034461,"samples":6},{"name":"DefineProperty (setter)","opsSec":848244992.7232112,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12867166.628877925,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12937380.107409447,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13035620.70818234,"samples":4},{"name":"DefineProperty (writable)","opsSec":849363834.0933592,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":822182995.6709123,"samples":4},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":849658911.1374716,"samples":6},{"name":"DefineProperties (setter)","opsSec":848793912.9848667,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12158271.82625024,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11778630.919682544,"samples":5}]}-->
