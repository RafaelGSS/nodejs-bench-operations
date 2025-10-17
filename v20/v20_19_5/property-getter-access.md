## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|99,423,759|49713915|
|Getter|54,024,166|27012089|
|Method|101,270,023|50635018|
|DefineProperty (getter)|94,354,259|47177148|
|DefineProperty (getter & enumerable=false)|53,662,823|26831415|
|DefineProperty (getter & configurable=false)|101,332,595|50674984|
|DefineProperty (getter & enumerable=false & configurable=false)|53,772,816|26890609|
|DefineProperty (writable)|100,879,487|50473134|
|DefineProperty (writable & enumerable=false)|100,534,194|50269084|
|DefineProperty (writable & enumerable=false & configurable=false)|97,905,647|48979962|
|DefineProperties (getter)|52,938,683|26471255|
|DefineProperties (getter & enumerable=false)|53,774,836|26887430|
|DefineProperties (getter & enumerable=false & configurable=false)|53,711,385|26855695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:48:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":49713915,"opsSec":99423759.19360358},{"name":"Getter","samples":27012089,"opsSec":54024166.43882839},{"name":"Method","samples":50635018,"opsSec":101270023.03743705},{"name":"DefineProperty (getter)","samples":47177148,"opsSec":94354259.20183891},{"name":"DefineProperty (getter & enumerable=false)","samples":26831415,"opsSec":53662823.023833},{"name":"DefineProperty (getter & configurable=false)","samples":50674984,"opsSec":101332595.7424511},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26890609,"opsSec":53772816.96525989},{"name":"DefineProperty (writable)","samples":50473134,"opsSec":100879487.59504285},{"name":"DefineProperty (writable & enumerable=false)","samples":50269084,"opsSec":100534194.48649712},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48979962,"opsSec":97905647.45878439},{"name":"DefineProperties (getter)","samples":26471255,"opsSec":52938683.69781969},{"name":"DefineProperties (getter & enumerable=false)","samples":26887430,"opsSec":53774836.98436976},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26855695,"opsSec":53711385.91793466}]}-->
