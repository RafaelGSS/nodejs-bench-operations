## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|92,289,672|46144847|
|Getter|53,006,173|26503273|
|Method|92,242,672|46122722|
|DefineProperty (getter)|92,780,886|46395314|
|DefineProperty (getter & enumerable=false)|53,121,069|26560543|
|DefineProperty (getter & configurable=false)|91,837,656|46063771|
|DefineProperty (getter & enumerable=false & configurable=false)|53,740,567|26873997|
|DefineProperty (writable)|92,497,646|46253860|
|DefineProperty (writable & enumerable=false)|89,999,485|45044525|
|DefineProperty (writable & enumerable=false & configurable=false)|78,266,702|39133353|
|DefineProperties (getter)|52,547,071|26284647|
|DefineProperties (getter & enumerable=false)|53,755,534|26913571|
|DefineProperties (getter & enumerable=false & configurable=false)|53,755,045|26877705|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:51:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":46144847,"opsSec":92289672.77337527},{"name":"Getter","samples":26503273,"opsSec":53006173.26058963},{"name":"Method","samples":46122722,"opsSec":92242672.84562238},{"name":"DefineProperty (getter)","samples":46395314,"opsSec":92780886.00696927},{"name":"DefineProperty (getter & enumerable=false)","samples":26560543,"opsSec":53121069.85119476},{"name":"DefineProperty (getter & configurable=false)","samples":46063771,"opsSec":91837656.98674728},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26873997,"opsSec":53740567.91336346},{"name":"DefineProperty (writable)","samples":46253860,"opsSec":92497646.08136527},{"name":"DefineProperty (writable & enumerable=false)","samples":45044525,"opsSec":89999485.93158136},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":39133353,"opsSec":78266702.55626509},{"name":"DefineProperties (getter)","samples":26284647,"opsSec":52547071.213019155},{"name":"DefineProperties (getter & enumerable=false)","samples":26913571,"opsSec":53755534.25282182},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26877705,"opsSec":53755045.00324443}]}-->
