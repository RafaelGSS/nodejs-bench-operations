## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,000,379|8000190|
|Getter|13,867,543|6933772|
|Method|15,857,475|7928738|
|DefineProperty (getter)|15,923,214|7961608|
|DefineProperty (getter & enumerable=false)|13,338,433|6669218|
|DefineProperty (getter & configurable=false)|16,127,357|8063679|
|DefineProperty (getter & enumerable=false & configurable=false)|13,308,960|6654481|
|DefineProperty (writable)|16,089,719|8044860|
|DefineProperty (writable & enumerable=false)|16,118,680|8059341|
|DefineProperty (writable & enumerable=false & configurable=false)|16,036,419|8018210|
|DefineProperties (getter)|12,992,492|6496247|
|DefineProperties (getter & enumerable=false)|12,988,893|6494447|
|DefineProperties (getter & enumerable=false & configurable=false)|13,011,132|6505567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:31:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Getter (class)","opsSec":16000379.039974108,"samples":8000190},{"name":"Getter","opsSec":13867543.195678087,"samples":6933772},{"name":"Method","opsSec":15857475.492631396,"samples":7928738},{"name":"DefineProperty (getter)","opsSec":15923214.726021728,"samples":7961608},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13338433.86590809,"samples":6669218},{"name":"DefineProperty (getter & configurable=false)","opsSec":16127357.645347156,"samples":8063679},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13308960.243198643,"samples":6654481},{"name":"DefineProperty (writable)","opsSec":16089719.0989437,"samples":8044860},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16118680.54962811,"samples":8059341},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16036419.743413232,"samples":8018210},{"name":"DefineProperties (getter)","opsSec":12992492.20706534,"samples":6496247},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12988893.818452932,"samples":6494447},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13011132.620987607,"samples":6505567}]}-->
