## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,490,182|8245092|
|Getter|13,860,676|6930339|
|Method|16,392,167|8196084|
|DefineProperty (getter)|16,324,605|8162303|
|DefineProperty (getter & enumerable=false)|13,855,641|6927821|
|DefineProperty (getter & configurable=false)|16,516,760|8258381|
|DefineProperty (getter & enumerable=false & configurable=false)|13,739,464|6869733|
|DefineProperty (writable)|16,313,963|8156982|
|DefineProperty (writable & enumerable=false)|16,338,304|8169153|
|DefineProperty (writable & enumerable=false & configurable=false)|16,442,000|8221001|
|DefineProperties (getter)|12,776,139|6388070|
|DefineProperties (getter & enumerable=false)|13,802,180|6901091|
|DefineProperties (getter & enumerable=false & configurable=false)|13,749,801|6874901|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:55:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16490182.592499407,"samples":8245092},{"name":"Getter","opsSec":13860676.301413627,"samples":6930339},{"name":"Method","opsSec":16392167.31997368,"samples":8196084},{"name":"DefineProperty (getter)","opsSec":16324605.065898605,"samples":8162303},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13855641.94714492,"samples":6927821},{"name":"DefineProperty (getter & configurable=false)","opsSec":16516760.16493744,"samples":8258381},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13739464.414540106,"samples":6869733},{"name":"DefineProperty (writable)","opsSec":16313963.502137346,"samples":8156982},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16338304.75348627,"samples":8169153},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16442000.737734739,"samples":8221001},{"name":"DefineProperties (getter)","opsSec":12776139.220206346,"samples":6388070},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13802180.229605444,"samples":6901091},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13749801.744299762,"samples":6874901}]}-->
