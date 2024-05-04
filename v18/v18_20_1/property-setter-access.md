## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|866,154,682|97|
|Setter|11,390,856|95|
|Method|866,162,005|92|
|DefineProperty (setter)|864,183,063|96|
|DefineProperty (setter & enumerable=false)|11,473,389|96|
|DefineProperty (setter & configurable=false)|11,394,209|98|
|DefineProperty (setter & enumerable=false & configurable=false)|11,326,220|93|
|DefineProperty (writable)|907,081,806|99|
|DefineProperty (writable & enumerable=false)|334,826,674|39|
|DefineProperty (writable & enumerable=false & configurable=false)|159,470,805|82|
|DefineProperties (setter)|123,142,237|86|
|DefineProperties (setter & enumerable=false)|11,240,847|99|
|DefineProperties (setter & enumerable=false & configurable=false)|11,621,246|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:59:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":866154681.5936053,"samples":7},{"name":"Setter","opsSec":11390856.436175533,"samples":6},{"name":"Method","opsSec":866162004.9584477,"samples":7},{"name":"DefineProperty (setter)","opsSec":864183063.2422944,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11473388.796402594,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":11394208.550268656,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11326219.93033601,"samples":5},{"name":"DefineProperty (writable)","opsSec":907081806.0183959,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":334826673.68198127,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":159470804.84775928,"samples":4},{"name":"DefineProperties (setter)","opsSec":123142236.67757297,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11240846.595085971,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11621245.810807385,"samples":6}]}-->
