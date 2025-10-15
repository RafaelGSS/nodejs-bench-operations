## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|105,983,193|52991611|
|Getter|55,708,142|27855728|
|Method|105,495,760|52825342|
|DefineProperty (getter)|93,687,835|46843931|
|DefineProperty (getter & enumerable=false)|53,908,815|26954415|
|DefineProperty (getter & configurable=false)|107,041,764|53520918|
|DefineProperty (getter & enumerable=false & configurable=false)|57,112,272|28556145|
|DefineProperty (writable)|105,776,167|52890579|
|DefineProperty (writable & enumerable=false)|106,490,572|53246207|
|DefineProperty (writable & enumerable=false & configurable=false)|105,214,187|52607106|
|DefineProperties (getter)|52,065,758|26032886|
|DefineProperties (getter & enumerable=false)|55,699,163|27849599|
|DefineProperties (getter & enumerable=false & configurable=false)|56,428,540|28214301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:15:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":52991611,"opsSec":105983193.17257145},{"name":"Getter","samples":27855728,"opsSec":55708142.03404668},{"name":"Method","samples":52825342,"opsSec":105495760.9431567},{"name":"DefineProperty (getter)","samples":46843931,"opsSec":93687835.39265475},{"name":"DefineProperty (getter & enumerable=false)","samples":26954415,"opsSec":53908815.228984624},{"name":"DefineProperty (getter & configurable=false)","samples":53520918,"opsSec":107041764.28201795},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":28556145,"opsSec":57112272.63786911},{"name":"DefineProperty (writable)","samples":52890579,"opsSec":105776167.90350299},{"name":"DefineProperty (writable & enumerable=false)","samples":53246207,"opsSec":106490572.77799667},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":52607106,"opsSec":105214187.59030847},{"name":"DefineProperties (getter)","samples":26032886,"opsSec":52065758.4629028},{"name":"DefineProperties (getter & enumerable=false)","samples":27849599,"opsSec":55699163.132323876},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":28214301,"opsSec":56428540.3800339}]}-->
