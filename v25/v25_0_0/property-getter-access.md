## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,640,340|47820202|
|Getter|46,683,211|23345091|
|Method|98,550,652|49275355|
|DefineProperty (getter)|95,981,656|47991267|
|DefineProperty (getter & enumerable=false)|46,068,098|23086605|
|DefineProperty (getter & configurable=false)|90,600,916|45310252|
|DefineProperty (getter & enumerable=false & configurable=false)|46,551,238|23278049|
|DefineProperty (writable)|94,137,958|47075972|
|DefineProperty (writable & enumerable=false)|95,112,657|47562758|
|DefineProperty (writable & enumerable=false & configurable=false)|92,553,932|46277028|
|DefineProperties (getter)|47,068,602|23534311|
|DefineProperties (getter & enumerable=false)|47,328,591|23664296|
|DefineProperties (getter & enumerable=false & configurable=false)|43,164,006|21582480|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:16:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47820202,"opsSec":95640340.1122528},{"name":"Getter","samples":23345091,"opsSec":46683211.63630416},{"name":"Method","samples":49275355,"opsSec":98550652.64352016},{"name":"DefineProperty (getter)","samples":47991267,"opsSec":95981656.15177284},{"name":"DefineProperty (getter & enumerable=false)","samples":23086605,"opsSec":46068098.99832906},{"name":"DefineProperty (getter & configurable=false)","samples":45310252,"opsSec":90600916.62543108},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":23278049,"opsSec":46551238.60930405},{"name":"DefineProperty (writable)","samples":47075972,"opsSec":94137958.30008718},{"name":"DefineProperty (writable & enumerable=false)","samples":47562758,"opsSec":95112657.33940364},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46277028,"opsSec":92553932.90326925},{"name":"DefineProperties (getter)","samples":23534311,"opsSec":47068602.1370499},{"name":"DefineProperties (getter & enumerable=false)","samples":23664296,"opsSec":47328591.81068563},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":21582480,"opsSec":43164006.248117946}]}-->
