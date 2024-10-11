## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|161,197,690|80598912|
|Getter|53,549,195|26776953|
|Method|105,588,211|52794116|
|DefineProperty (getter)|106,923,828|53461927|
|DefineProperty (getter & enumerable=false)|55,774,980|27887498|
|DefineProperty (getter & configurable=false)|106,762,504|53383453|
|DefineProperty (getter & enumerable=false & configurable=false)|55,636,011|27821143|
|DefineProperty (writable)|106,935,784|53471429|
|DefineProperty (writable & enumerable=false)|107,011,386|53505702|
|DefineProperty (writable & enumerable=false & configurable=false)|106,952,578|53483600|
|DefineProperties (getter)|55,673,582|27836867|
|DefineProperties (getter & enumerable=false)|54,615,743|27307879|
|DefineProperties (getter & enumerable=false & configurable=false)|51,437,133|25718573|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:51:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Getter (class)","opsSec":161197690.85070735,"samples":80598912},{"name":"Getter","opsSec":53549195.4914694,"samples":26776953},{"name":"Method","opsSec":105588211.0935342,"samples":52794116},{"name":"DefineProperty (getter)","opsSec":106923828.5521288,"samples":53461927},{"name":"DefineProperty (getter & enumerable=false)","opsSec":55774980.159905635,"samples":27887498},{"name":"DefineProperty (getter & configurable=false)","opsSec":106762504.8225012,"samples":53383453},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":55636011.926934995,"samples":27821143},{"name":"DefineProperty (writable)","opsSec":106935784.62559016,"samples":53471429},{"name":"DefineProperty (writable & enumerable=false)","opsSec":107011386.45013262,"samples":53505702},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":106952578.51299149,"samples":53483600},{"name":"DefineProperties (getter)","opsSec":55673582.01112111,"samples":27836867},{"name":"DefineProperties (getter & enumerable=false)","opsSec":54615743.58144369,"samples":27307879},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51437133.44933944,"samples":25718573}]}-->
