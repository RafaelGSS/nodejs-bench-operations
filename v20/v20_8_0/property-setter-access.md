## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|579,318,908|91|
|Setter|6,653,960|87|
|Method|582,228,484|89|
|DefineProperty (setter)|587,041,031|90|
|DefineProperty (setter & enumerable=false)|6,707,242|91|
|DefineProperty (setter & configurable=false)|6,679,577|87|
|DefineProperty (setter & enumerable=false & configurable=false)|6,629,626|92|
|DefineProperty (writable)|589,225,798|91|
|DefineProperty (writable & enumerable=false)|588,753,571|92|
|DefineProperty (writable & enumerable=false & configurable=false)|590,018,620|90|
|DefineProperties (setter)|440,370,239|73|
|DefineProperties (setter & enumerable=false)|5,886,983|90|
|DefineProperties (setter & enumerable=false & configurable=false)|5,938,106|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":579318907.9687123,"samples":7},{"name":"Setter","opsSec":6653960.435579682,"samples":7},{"name":"Method","opsSec":582228483.5294039,"samples":7},{"name":"DefineProperty (setter)","opsSec":587041030.9263943,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6707242.133575868,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":6679577.244556443,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6629626.372111486,"samples":6},{"name":"DefineProperty (writable)","opsSec":589225797.7772721,"samples":10},{"name":"DefineProperty (writable & enumerable=false)","opsSec":588753570.6226461,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":590018619.8508004,"samples":8},{"name":"DefineProperties (setter)","opsSec":440370239.1501089,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5886983.09367567,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5938105.698066391,"samples":7}]}-->
