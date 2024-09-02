## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,665,104|7332553|
|Getter|12,416,532|6208267|
|Method|14,264,230|7132117|
|DefineProperty (getter)|14,533,199|7266600|
|DefineProperty (getter & enumerable=false)|12,421,318|6210660|
|DefineProperty (getter & configurable=false)|13,711,581|6855791|
|DefineProperty (getter & enumerable=false & configurable=false)|12,329,991|6164996|
|DefineProperty (writable)|13,837,469|6918735|
|DefineProperty (writable & enumerable=false)|14,055,065|7027533|
|DefineProperty (writable & enumerable=false & configurable=false)|13,740,445|6870223|
|DefineProperties (getter)|12,130,212|6065107|
|DefineProperties (getter & enumerable=false)|12,371,127|6185564|
|DefineProperties (getter & enumerable=false & configurable=false)|12,452,349|6226175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:21:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14665104.493201109,"samples":7332553},{"name":"Getter","opsSec":12416532.507992653,"samples":6208267},{"name":"Method","opsSec":14264230.90314713,"samples":7132117},{"name":"DefineProperty (getter)","opsSec":14533199.320429869,"samples":7266600},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12421318.508990835,"samples":6210660},{"name":"DefineProperty (getter & configurable=false)","opsSec":13711581.315992799,"samples":6855791},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12329991.743097859,"samples":6164996},{"name":"DefineProperty (writable)","opsSec":13837469.426676575,"samples":6918735},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14055065.634166272,"samples":7027533},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13740445.925676258,"samples":6870223},{"name":"DefineProperties (getter)","opsSec":12130212.936713075,"samples":6065107},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12371127.189484812,"samples":6185564},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12452349.656956175,"samples":6226175}]}-->
