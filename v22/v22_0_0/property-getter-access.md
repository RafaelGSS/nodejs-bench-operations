## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,912,823|7456412|
|Getter|12,284,653|6142327|
|Method|14,690,919|7345460|
|DefineProperty (getter)|14,943,951|7471976|
|DefineProperty (getter & enumerable=false)|12,653,596|6326799|
|DefineProperty (getter & configurable=false)|14,922,654|7461328|
|DefineProperty (getter & enumerable=false & configurable=false)|12,567,078|6283540|
|DefineProperty (writable)|15,067,250|7533626|
|DefineProperty (writable & enumerable=false)|14,693,448|7346725|
|DefineProperty (writable & enumerable=false & configurable=false)|14,575,101|7287551|
|DefineProperties (getter)|12,806,718|6403360|
|DefineProperties (getter & enumerable=false)|12,782,057|6391029|
|DefineProperties (getter & enumerable=false & configurable=false)|12,716,227|6358114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14912823.46325905,"samples":7456412},{"name":"Getter","opsSec":12284653.090739973,"samples":6142327},{"name":"Method","opsSec":14690919.236204913,"samples":7345460},{"name":"DefineProperty (getter)","opsSec":14943951.820684912,"samples":7471976},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12653596.38043597,"samples":6326799},{"name":"DefineProperty (getter & configurable=false)","opsSec":14922654.239157474,"samples":7461328},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12567078.843904797,"samples":6283540},{"name":"DefineProperty (writable)","opsSec":15067250.433582949,"samples":7533626},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14693448.35442859,"samples":7346725},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14575101.446262399,"samples":7287551},{"name":"DefineProperties (getter)","opsSec":12806718.87294313,"samples":6403360},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12782057.182093147,"samples":6391029},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12716227.542197518,"samples":6358114}]}-->
