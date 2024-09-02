## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,914,888|7457445|
|Getter|12,338,339|6169170|
|Method|14,970,481|7485241|
|DefineProperty (getter)|15,223,918|7611960|
|DefineProperty (getter & enumerable=false)|12,329,729|6164865|
|DefineProperty (getter & configurable=false)|14,391,990|7195996|
|DefineProperty (getter & enumerable=false & configurable=false)|12,209,045|6104523|
|DefineProperty (writable)|14,631,355|7315678|
|DefineProperty (writable & enumerable=false)|14,758,337|7379169|
|DefineProperty (writable & enumerable=false & configurable=false)|14,567,500|7283751|
|DefineProperties (getter)|12,437,116|6218559|
|DefineProperties (getter & enumerable=false)|12,402,489|6201245|
|DefineProperties (getter & enumerable=false & configurable=false)|12,429,813|6214907|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:37:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14914888.836698178,"samples":7457445},{"name":"Getter","opsSec":12338339.259801913,"samples":6169170},{"name":"Method","opsSec":14970481.460925892,"samples":7485241},{"name":"DefineProperty (getter)","opsSec":15223918.264394969,"samples":7611960},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12329729.7041813,"samples":6164865},{"name":"DefineProperty (getter & configurable=false)","opsSec":14391990.704814851,"samples":7195996},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12209045.316392012,"samples":6104523},{"name":"DefineProperty (writable)","opsSec":14631355.06346521,"samples":7315678},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14758337.497457601,"samples":7379169},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14567500.806223648,"samples":7283751},{"name":"DefineProperties (getter)","opsSec":12437116.084405664,"samples":6218559},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12402489.975025179,"samples":6201245},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12429813.4276787,"samples":6214907}]}-->
