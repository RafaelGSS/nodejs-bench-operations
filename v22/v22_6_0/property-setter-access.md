## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,120,263|7560132|
|Setter|6,021,673|3010837|
|Method|12,419,040|6209521|
|DefineProperty (setter)|13,958,781|6979391|
|DefineProperty (setter & enumerable=false)|6,116,916|3058459|
|DefineProperty (setter & configurable=false)|6,088,876|3044439|
|DefineProperty (setter & enumerable=false & configurable=false)|6,112,702|3056352|
|DefineProperty (writable)|14,777,111|7388556|
|DefineProperty (writable & enumerable=false)|14,970,277|7485139|
|DefineProperty (writable & enumerable=false & configurable=false)|14,793,037|7396519|
|DefineProperties (setter)|14,888,713|7444358|
|DefineProperties (setter & enumerable=false)|6,120,770|3060386|
|DefineProperties (setter & enumerable=false & configurable=false)|6,109,188|3054595|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:56:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":15120263.183572179,"samples":7560132},{"name":"Setter","opsSec":6021673.518345521,"samples":3010837},{"name":"Method","opsSec":12419040.485066487,"samples":6209521},{"name":"DefineProperty (setter)","opsSec":13958781.050982742,"samples":6979391},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6116916.959997544,"samples":3058459},{"name":"DefineProperty (setter & configurable=false)","opsSec":6088876.563061061,"samples":3044439},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6112702.398504342,"samples":3056352},{"name":"DefineProperty (writable)","opsSec":14777111.55660522,"samples":7388556},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14970277.491012353,"samples":7485139},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14793037.023696035,"samples":7396519},{"name":"DefineProperties (setter)","opsSec":14888713.736722786,"samples":7444358},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6120770.286085586,"samples":3060386},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6109188.362691804,"samples":3054595}]}-->
