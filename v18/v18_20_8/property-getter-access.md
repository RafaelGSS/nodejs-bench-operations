## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|101,212,287|50625411|
|Getter|55,245,906|27623365|
|Method|102,132,782|52017732|
|DefineProperty (getter)|104,561,806|52281033|
|DefineProperty (getter & enumerable=false)|56,705,035|28353668|
|DefineProperty (getter & configurable=false)|103,160,829|51648389|
|DefineProperty (getter & enumerable=false & configurable=false)|56,738,307|28369160|
|DefineProperty (writable)|103,580,851|52107725|
|DefineProperty (writable & enumerable=false)|104,565,835|52283134|
|DefineProperty (writable & enumerable=false & configurable=false)|102,727,164|51363585|
|DefineProperties (getter)|53,859,127|26929570|
|DefineProperties (getter & enumerable=false)|53,914,444|26957230|
|DefineProperties (getter & enumerable=false & configurable=false)|55,072,847|27538305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:27:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":50625411,"opsSec":101212287.64814828},{"name":"Getter","samples":27623365,"opsSec":55245906.39402748},{"name":"Method","samples":52017732,"opsSec":102132782.75355166},{"name":"DefineProperty (getter)","samples":52281033,"opsSec":104561806.05935013},{"name":"DefineProperty (getter & enumerable=false)","samples":28353668,"opsSec":56705035.476710714},{"name":"DefineProperty (getter & configurable=false)","samples":51648389,"opsSec":103160829.77002583},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":28369160,"opsSec":56738307.51757234},{"name":"DefineProperty (writable)","samples":52107725,"opsSec":103580851.7607642},{"name":"DefineProperty (writable & enumerable=false)","samples":52283134,"opsSec":104565835.7248351},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51363585,"opsSec":102727164.65818743},{"name":"DefineProperties (getter)","samples":26929570,"opsSec":53859127.504682414},{"name":"DefineProperties (getter & enumerable=false)","samples":26957230,"opsSec":53914444.79612657},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":27538305,"opsSec":55072847.973754905}]}-->
