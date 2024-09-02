## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,949,935|7474968|
|Getter|12,525,479|6262740|
|Method|15,084,260|7542131|
|DefineProperty (getter)|14,753,336|7376669|
|DefineProperty (getter & enumerable=false)|12,663,547|6331774|
|DefineProperty (getter & configurable=false)|14,495,540|7247771|
|DefineProperty (getter & enumerable=false & configurable=false)|12,402,450|6201226|
|DefineProperty (writable)|14,879,963|7439982|
|DefineProperty (writable & enumerable=false)|14,638,163|7319082|
|DefineProperty (writable & enumerable=false & configurable=false)|14,634,950|7317476|
|DefineProperties (getter)|12,040,819|6020410|
|DefineProperties (getter & enumerable=false)|12,336,823|6168412|
|DefineProperties (getter & enumerable=false & configurable=false)|12,409,725|6204863|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:39:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14949935.252468394,"samples":7474968},{"name":"Getter","opsSec":12525479.022875056,"samples":6262740},{"name":"Method","opsSec":15084260.159635348,"samples":7542131},{"name":"DefineProperty (getter)","opsSec":14753336.878785307,"samples":7376669},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12663547.594888518,"samples":6331774},{"name":"DefineProperty (getter & configurable=false)","opsSec":14495540.492890637,"samples":7247771},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12402450.709980454,"samples":6201226},{"name":"DefineProperty (writable)","opsSec":14879963.970327757,"samples":7439982},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14638163.385130256,"samples":7319082},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14634950.565844424,"samples":7317476},{"name":"DefineProperties (getter)","opsSec":12040819.663001664,"samples":6020410},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12336823.925759831,"samples":6168412},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12409725.99942646,"samples":6204863}]}-->
