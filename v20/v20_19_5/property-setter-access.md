## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|102,069,690|51035268|
|Setter|11,434,241|5717124|
|Method|99,749,157|49874585|
|DefineProperty (setter)|100,287,692|50143854|
|DefineProperty (setter & enumerable=false)|11,697,694|5850014|
|DefineProperty (setter & configurable=false)|11,549,489|5775576|
|DefineProperty (setter & enumerable=false & configurable=false)|11,526,749|5763375|
|DefineProperty (writable)|101,629,045|50814546|
|DefineProperty (writable & enumerable=false)|105,027,175|52513598|
|DefineProperty (writable & enumerable=false & configurable=false)|103,265,573|51649470|
|DefineProperties (setter)|97,049,768|48541740|
|DefineProperties (setter & enumerable=false)|11,567,429|5783716|
|DefineProperties (setter & enumerable=false & configurable=false)|11,721,493|5860757|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:50:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":51035268,"opsSec":102069690.04640889},{"name":"Setter","samples":5717124,"opsSec":11434241.002244506},{"name":"Method","samples":49874585,"opsSec":99749157.63110445},{"name":"DefineProperty (setter)","samples":50143854,"opsSec":100287692.7562707},{"name":"DefineProperty (setter & enumerable=false)","samples":5850014,"opsSec":11697694.286594436},{"name":"DefineProperty (setter & configurable=false)","samples":5775576,"opsSec":11549489.936002288},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5763375,"opsSec":11526749.077860074},{"name":"DefineProperty (writable)","samples":50814546,"opsSec":101629045.65715519},{"name":"DefineProperty (writable & enumerable=false)","samples":52513598,"opsSec":105027175.41467361},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51649470,"opsSec":103265573.03457221},{"name":"DefineProperties (setter)","samples":48541740,"opsSec":97049768.01618376},{"name":"DefineProperties (setter & enumerable=false)","samples":5783716,"opsSec":11567429.200682133},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5860757,"opsSec":11721493.628044076}]}-->
