## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|103,682,850|51841970|
|Setter|10,786,126|5400105|
|Method|101,505,309|50752669|
|DefineProperty (setter)|104,627,678|52321871|
|DefineProperty (setter & enumerable=false)|10,931,796|5465900|
|DefineProperty (setter & configurable=false)|11,175,632|5587818|
|DefineProperty (setter & enumerable=false & configurable=false)|11,109,633|5554822|
|DefineProperty (writable)|98,873,322|49436681|
|DefineProperty (writable & enumerable=false)|98,633,161|49316622|
|DefineProperty (writable & enumerable=false & configurable=false)|92,299,288|46154475|
|DefineProperties (setter)|89,593,902|44796962|
|DefineProperties (setter & enumerable=false)|10,730,568|5365286|
|DefineProperties (setter & enumerable=false & configurable=false)|11,101,175|5550609|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:30:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":51841970,"opsSec":103682850.08587989},{"name":"Setter","samples":5400105,"opsSec":10786126.66227833},{"name":"Method","samples":50752669,"opsSec":101505309.37550275},{"name":"DefineProperty (setter)","samples":52321871,"opsSec":104627678.30329475},{"name":"DefineProperty (setter & enumerable=false)","samples":5465900,"opsSec":10931796.895369682},{"name":"DefineProperty (setter & configurable=false)","samples":5587818,"opsSec":11175632.826120278},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5554822,"opsSec":11109633.334751999},{"name":"DefineProperty (writable)","samples":49436681,"opsSec":98873322.84616417},{"name":"DefineProperty (writable & enumerable=false)","samples":49316622,"opsSec":98633161.3454108},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46154475,"opsSec":92299288.66425836},{"name":"DefineProperties (setter)","samples":44796962,"opsSec":89593902.13908789},{"name":"DefineProperties (setter & enumerable=false)","samples":5365286,"opsSec":10730568.33014563},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5550609,"opsSec":11101175.904340971}]}-->
