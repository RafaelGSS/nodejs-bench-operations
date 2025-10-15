## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|99,000,457|49501792|
|Setter|11,825,279|5912753|
|Method|93,913,023|46956518|
|DefineProperty (setter)|99,890,796|49979105|
|DefineProperty (setter & enumerable=false)|11,759,563|5884050|
|DefineProperty (setter & configurable=false)|11,849,235|5924927|
|DefineProperty (setter & enumerable=false & configurable=false)|11,992,603|5996305|
|DefineProperty (writable)|100,264,211|50132111|
|DefineProperty (writable & enumerable=false)|100,733,651|50369285|
|DefineProperty (writable & enumerable=false & configurable=false)|101,126,299|50563157|
|DefineProperties (setter)|97,010,650|48506016|
|DefineProperties (setter & enumerable=false)|11,758,791|5882116|
|DefineProperties (setter & enumerable=false & configurable=false)|11,850,251|5925139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:22:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":49501792,"opsSec":99000457.76354474},{"name":"Setter","samples":5912753,"opsSec":11825279.00194428},{"name":"Method","samples":46956518,"opsSec":93913023.7913069},{"name":"DefineProperty (setter)","samples":49979105,"opsSec":99890796.29873869},{"name":"DefineProperty (setter & enumerable=false)","samples":5884050,"opsSec":11759563.145134788},{"name":"DefineProperty (setter & configurable=false)","samples":5924927,"opsSec":11849235.68318358},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5996305,"opsSec":11992603.571964486},{"name":"DefineProperty (writable)","samples":50132111,"opsSec":100264211.17146519},{"name":"DefineProperty (writable & enumerable=false)","samples":50369285,"opsSec":100733651.57872802},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50563157,"opsSec":101126299.03330775},{"name":"DefineProperties (setter)","samples":48506016,"opsSec":97010650.76235443},{"name":"DefineProperties (setter & enumerable=false)","samples":5882116,"opsSec":11758791.20730838},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5925139,"opsSec":11850251.834643949}]}-->
