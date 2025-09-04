## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|101,438,265|50754390|
|Setter|11,583,416|5791955|
|Method|99,790,230|49895132|
|DefineProperty (setter)|102,969,726|51515322|
|DefineProperty (setter & enumerable=false)|11,723,103|5862003|
|DefineProperty (setter & configurable=false)|11,605,880|5803044|
|DefineProperty (setter & enumerable=false & configurable=false)|11,674,414|5837211|
|DefineProperty (writable)|103,524,339|51945872|
|DefineProperty (writable & enumerable=false)|104,791,170|52406266|
|DefineProperty (writable & enumerable=false & configurable=false)|104,112,753|52072068|
|DefineProperties (setter)|95,294,048|47762049|
|DefineProperties (setter & enumerable=false)|11,637,206|5820209|
|DefineProperties (setter & enumerable=false & configurable=false)|11,450,799|5726183|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:58:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":50754390,"opsSec":101438265.79816},{"name":"Setter","samples":5791955,"opsSec":11583416.708616048},{"name":"Method","samples":49895132,"opsSec":99790230.67006294},{"name":"DefineProperty (setter)","samples":51515322,"opsSec":102969726.90362436},{"name":"DefineProperty (setter & enumerable=false)","samples":5862003,"opsSec":11723103.250711076},{"name":"DefineProperty (setter & configurable=false)","samples":5803044,"opsSec":11605880.97429518},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5837211,"opsSec":11674414.551723517},{"name":"DefineProperty (writable)","samples":51945872,"opsSec":103524339.63845068},{"name":"DefineProperty (writable & enumerable=false)","samples":52406266,"opsSec":104791170.94854915},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":52072068,"opsSec":104112753.50093772},{"name":"DefineProperties (setter)","samples":47762049,"opsSec":95294048.82731408},{"name":"DefineProperties (setter & enumerable=false)","samples":5820209,"opsSec":11637206.759343587},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5726183,"opsSec":11450799.896999687}]}-->
