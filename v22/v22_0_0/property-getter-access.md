## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|141,189,745|77|
|Getter|63,880,276|89|
|Method|136,916,549|79|
|DefineProperty (getter)|145,227,034|81|
|DefineProperty (getter & enumerable=false)|64,187,328|87|
|DefineProperty (getter & configurable=false)|144,641,453|82|
|DefineProperty (getter & enumerable=false & configurable=false)|64,252,123|91|
|DefineProperty (writable)|142,212,840|78|
|DefineProperty (writable & enumerable=false)|142,475,706|82|
|DefineProperty (writable & enumerable=false & configurable=false)|146,535,627|81|
|DefineProperties (getter)|64,314,466|92|
|DefineProperties (getter & enumerable=false)|64,871,702|88|
|DefineProperties (getter & enumerable=false & configurable=false)|61,845,684|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:49:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":141189744.94986138,"samples":5},{"name":"Getter","opsSec":63880276.01801818,"samples":4},{"name":"Method","opsSec":136916548.9086586,"samples":5},{"name":"DefineProperty (getter)","opsSec":145227034.18012637,"samples":5},{"name":"DefineProperty (getter & enumerable=false)","opsSec":64187328.477411225,"samples":4},{"name":"DefineProperty (getter & configurable=false)","opsSec":144641453.25625682,"samples":5},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":64252122.75285556,"samples":4},{"name":"DefineProperty (writable)","opsSec":142212839.62966555,"samples":4},{"name":"DefineProperty (writable & enumerable=false)","opsSec":142475706.35398716,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":146535627.00379893,"samples":6},{"name":"DefineProperties (getter)","opsSec":64314466.07262233,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":64871702.17663346,"samples":8},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":61845683.62290133,"samples":4}]}-->
