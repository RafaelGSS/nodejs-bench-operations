## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,854,497|7427378|
|Setter|5,578,640|2789321|
|Method|13,354,951|6677476|
|DefineProperty (setter)|13,775,492|6887747|
|DefineProperty (setter & enumerable=false)|5,532,147|2766074|
|DefineProperty (setter & configurable=false)|5,644,161|2822081|
|DefineProperty (setter & enumerable=false & configurable=false)|5,673,662|2836832|
|DefineProperty (writable)|15,291,972|7645987|
|DefineProperty (writable & enumerable=false)|14,268,859|7134430|
|DefineProperty (writable & enumerable=false & configurable=false)|15,299,385|7649693|
|DefineProperties (setter)|13,805,590|6902796|
|DefineProperties (setter & enumerable=false)|5,571,094|2785548|
|DefineProperties (setter & enumerable=false & configurable=false)|5,504,834|2752418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:57:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14854497.20528381,"samples":7427378},{"name":"Setter","opsSec":5578640.449109991,"samples":2789321},{"name":"Method","opsSec":13354951.251903456,"samples":6677476},{"name":"DefineProperty (setter)","opsSec":13775492.539901936,"samples":6887747},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5532147.922509571,"samples":2766074},{"name":"DefineProperty (setter & configurable=false)","opsSec":5644161.232407611,"samples":2822081},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5673662.161754551,"samples":2836832},{"name":"DefineProperty (writable)","opsSec":15291972.531892031,"samples":7645987},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14268859.943093143,"samples":7134430},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15299385.63312386,"samples":7649693},{"name":"DefineProperties (setter)","opsSec":13805590.481610542,"samples":6902796},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5571094.127949113,"samples":2785548},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5504834.3262920445,"samples":2752418}]}-->
