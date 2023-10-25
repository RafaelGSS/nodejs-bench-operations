## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|703,473,919|94|
|Getter|56,558,992|94|
|Method|709,523,658|96|
|DefineProperty (getter)|710,872,894|93|
|DefineProperty (getter & enumerable=false)|56,474,879|96|
|DefineProperty (getter & configurable=false)|711,505,018|96|
|DefineProperty (getter & enumerable=false & configurable=false)|57,063,402|98|
|DefineProperty (writable)|712,759,965|98|
|DefineProperty (writable & enumerable=false)|710,835,018|93|
|DefineProperty (writable & enumerable=false & configurable=false)|709,153,598|98|
|DefineProperties (getter)|57,185,903|96|
|DefineProperties (getter & enumerable=false)|42,506,541|73|
|DefineProperties (getter & enumerable=false & configurable=false)|37,102,059|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":703473919.0698085,"samples":6},{"name":"Getter","opsSec":56558991.79756999,"samples":7},{"name":"Method","opsSec":709523658.3538618,"samples":9},{"name":"DefineProperty (getter)","opsSec":710872894.2109172,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56474878.66391017,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":711505018.4111184,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":57063402.068451285,"samples":5},{"name":"DefineProperty (writable)","opsSec":712759964.8577704,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":710835018.0735443,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":709153598.4228256,"samples":9},{"name":"DefineProperties (getter)","opsSec":57185902.9439867,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":42506540.677409686,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":37102058.91989677,"samples":6}]}-->
