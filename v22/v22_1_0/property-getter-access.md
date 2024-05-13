## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,148,830|8074416|
|Getter|13,737,854|6868928|
|Method|15,807,369|7903685|
|DefineProperty (getter)|16,070,440|8035221|
|DefineProperty (getter & enumerable=false)|13,881,010|6940506|
|DefineProperty (getter & configurable=false)|16,199,903|8099952|
|DefineProperty (getter & enumerable=false & configurable=false)|13,778,043|6889022|
|DefineProperty (writable)|16,101,368|8050685|
|DefineProperty (writable & enumerable=false)|16,123,237|8061619|
|DefineProperty (writable & enumerable=false & configurable=false)|16,088,724|8044363|
|DefineProperties (getter)|13,585,853|6792927|
|DefineProperties (getter & enumerable=false)|13,950,774|6975388|
|DefineProperties (getter & enumerable=false & configurable=false)|13,867,364|6933683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:45:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16148830.417420192,"samples":8074416},{"name":"Getter","opsSec":13737854.571237503,"samples":6868928},{"name":"Method","opsSec":15807369.399282208,"samples":7903685},{"name":"DefineProperty (getter)","opsSec":16070440.553615369,"samples":8035221},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13881010.278766667,"samples":6940506},{"name":"DefineProperty (getter & configurable=false)","opsSec":16199903.708365565,"samples":8099952},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13778043.200851569,"samples":6889022},{"name":"DefineProperty (writable)","opsSec":16101368.422042398,"samples":8050685},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16123237.677295819,"samples":8061619},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16088724.712617362,"samples":8044363},{"name":"DefineProperties (getter)","opsSec":13585853.184632447,"samples":6792927},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13950774.772445902,"samples":6975388},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13867364.363894021,"samples":6933683}]}-->
