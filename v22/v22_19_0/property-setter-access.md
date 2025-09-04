## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|99,558,021|49779541|
|Setter|11,615,055|5807530|
|Method|99,229,395|49614706|
|DefineProperty (setter)|99,303,405|49651717|
|DefineProperty (setter & enumerable=false)|11,260,108|5630057|
|DefineProperty (setter & configurable=false)|11,383,470|5691738|
|DefineProperty (setter & enumerable=false & configurable=false)|11,441,566|5720851|
|DefineProperty (writable)|99,459,598|49729810|
|DefineProperty (writable & enumerable=false)|96,557,864|48284028|
|DefineProperty (writable & enumerable=false & configurable=false)|95,218,607|47613078|
|DefineProperties (setter)|101,313,087|50656550|
|DefineProperties (setter & enumerable=false)|11,721,831|5860919|
|DefineProperties (setter & enumerable=false & configurable=false)|11,812,795|5912218|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:00:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":49779541,"opsSec":99558021.30884098},{"name":"Setter","samples":5807530,"opsSec":11615055.098446747},{"name":"Method","samples":49614706,"opsSec":99229395.7263791},{"name":"DefineProperty (setter)","samples":49651717,"opsSec":99303405.59922601},{"name":"DefineProperty (setter & enumerable=false)","samples":5630057,"opsSec":11260108.887910565},{"name":"DefineProperty (setter & configurable=false)","samples":5691738,"opsSec":11383470.649768794},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5720851,"opsSec":11441566.188609341},{"name":"DefineProperty (writable)","samples":49729810,"opsSec":99459598.11888841},{"name":"DefineProperty (writable & enumerable=false)","samples":48284028,"opsSec":96557864.51051664},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47613078,"opsSec":95218607.64009795},{"name":"DefineProperties (setter)","samples":50656550,"opsSec":101313087.23455101},{"name":"DefineProperties (setter & enumerable=false)","samples":5860919,"opsSec":11721831.763985502},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5912218,"opsSec":11812795.293508327}]}-->
