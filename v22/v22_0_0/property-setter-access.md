## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|98,735,552|49426379|
|Setter|11,421,285|5782503|
|Method|94,478,527|47239276|
|DefineProperty (setter)|93,507,797|46753911|
|DefineProperty (setter & enumerable=false)|11,660,894|5830451|
|DefineProperty (setter & configurable=false)|11,635,815|5817911|
|DefineProperty (setter & enumerable=false & configurable=false)|11,789,503|5894907|
|DefineProperty (writable)|96,049,146|48140878|
|DefineProperty (writable & enumerable=false)|99,113,526|49556773|
|DefineProperty (writable & enumerable=false & configurable=false)|98,714,820|49357418|
|DefineProperties (setter)|90,004,566|45624419|
|DefineProperties (setter & enumerable=false)|11,570,146|5785683|
|DefineProperties (setter & enumerable=false & configurable=false)|11,716,071|5858408|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:32:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":49426379,"opsSec":98735552.77724913},{"name":"Setter","samples":5782503,"opsSec":11421285.094047967},{"name":"Method","samples":47239276,"opsSec":94478527.81349687},{"name":"DefineProperty (setter)","samples":46753911,"opsSec":93507797.6879726},{"name":"DefineProperty (setter & enumerable=false)","samples":5830451,"opsSec":11660894.280487986},{"name":"DefineProperty (setter & configurable=false)","samples":5817911,"opsSec":11635815.972647326},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5894907,"opsSec":11789503.865311319},{"name":"DefineProperty (writable)","samples":48140878,"opsSec":96049146.48222885},{"name":"DefineProperty (writable & enumerable=false)","samples":49556773,"opsSec":99113526.17729478},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49357418,"opsSec":98714820.20562878},{"name":"DefineProperties (setter)","samples":45624419,"opsSec":90004566.8060347},{"name":"DefineProperties (setter & enumerable=false)","samples":5785683,"opsSec":11570146.969315313},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5858408,"opsSec":11716071.162491918}]}-->
