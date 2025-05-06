## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|92,363,874|46197957|
|Getter|54,018,134|27009078|
|Method|95,344,608|47672329|
|DefineProperty (getter)|90,994,775|45502872|
|DefineProperty (getter & enumerable=false)|54,334,486|27183490|
|DefineProperty (getter & configurable=false)|93,305,318|46652730|
|DefineProperty (getter & enumerable=false & configurable=false)|54,324,608|27163932|
|DefineProperty (writable)|94,217,936|47122551|
|DefineProperty (writable & enumerable=false)|94,223,229|47111619|
|DefineProperty (writable & enumerable=false & configurable=false)|94,650,641|47327724|
|DefineProperties (getter)|53,659,368|26829696|
|DefineProperties (getter & enumerable=false)|51,574,035|25787037|
|DefineProperties (getter & enumerable=false & configurable=false)|50,942,229|25471128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:27:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":46197957,"opsSec":92363874.81910275},{"name":"Getter","samples":27009078,"opsSec":54018134.6088187},{"name":"Method","samples":47672329,"opsSec":95344608.23011452},{"name":"DefineProperty (getter)","samples":45502872,"opsSec":90994775.85369769},{"name":"DefineProperty (getter & enumerable=false)","samples":27183490,"opsSec":54334486.78154593},{"name":"DefineProperty (getter & configurable=false)","samples":46652730,"opsSec":93305318.36252673},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27163932,"opsSec":54324608.217580296},{"name":"DefineProperty (writable)","samples":47122551,"opsSec":94217936.33085361},{"name":"DefineProperty (writable & enumerable=false)","samples":47111619,"opsSec":94223229.70835578},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47327724,"opsSec":94650641.45112583},{"name":"DefineProperties (getter)","samples":26829696,"opsSec":53659368.92647136},{"name":"DefineProperties (getter & enumerable=false)","samples":25787037,"opsSec":51574035.525769494},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25471128,"opsSec":50942229.91757829}]}-->
