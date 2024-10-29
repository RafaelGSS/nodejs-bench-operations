## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|153,101,811|76575599|
|Setter|10,113,163|5064107|
|Method|103,734,079|51872918|
|DefineProperty (setter)|102,119,516|51062166|
|DefineProperty (setter & enumerable=false)|9,859,014|4929787|
|DefineProperty (setter & configurable=false)|9,903,027|4952116|
|DefineProperty (setter & enumerable=false & configurable=false)|9,832,542|4916334|
|DefineProperty (writable)|87,813,084|43906557|
|DefineProperty (writable & enumerable=false)|91,324,140|45662086|
|DefineProperty (writable & enumerable=false & configurable=false)|91,709,123|45857263|
|DefineProperties (setter)|90,732,646|45366325|
|DefineProperties (setter & enumerable=false)|10,171,111|5086293|
|DefineProperties (setter & enumerable=false & configurable=false)|9,998,837|5002248|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:58:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":153101811.0302051,"samples":76575599},{"name":"Setter","opsSec":10113163.206216305,"samples":5064107},{"name":"Method","opsSec":103734079.19440041,"samples":51872918},{"name":"DefineProperty (setter)","opsSec":102119516.04362337,"samples":51062166},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9859014.264324158,"samples":4929787},{"name":"DefineProperty (setter & configurable=false)","opsSec":9903027.950249698,"samples":4952116},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9832542.104130898,"samples":4916334},{"name":"DefineProperty (writable)","opsSec":87813084.6704297,"samples":43906557},{"name":"DefineProperty (writable & enumerable=false)","opsSec":91324140.40184742,"samples":45662086},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":91709123.96576191,"samples":45857263},{"name":"DefineProperties (setter)","opsSec":90732646.55215943,"samples":45366325},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10171111.758377293,"samples":5086293},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9998837.537851281,"samples":5002248}]}-->
