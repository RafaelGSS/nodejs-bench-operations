## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|940,249,762|96|
|Getter|97,565,258|96|
|Method|885,545,935|94|
|DefineProperty (getter)|938,128,899|97|
|DefineProperty (getter & enumerable=false)|97,551,411|98|
|DefineProperty (getter & configurable=false)|939,692,063|97|
|DefineProperty (getter & enumerable=false & configurable=false)|97,575,742|96|
|DefineProperty (writable)|937,147,333|97|
|DefineProperty (writable & enumerable=false)|937,303,169|99|
|DefineProperty (writable & enumerable=false & configurable=false)|936,616,471|99|
|DefineProperties (getter)|97,463,644|96|
|DefineProperties (getter & enumerable=false)|97,559,391|97|
|DefineProperties (getter & enumerable=false & configurable=false)|70,864,423|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:43:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":940249761.809599,"samples":7},{"name":"Getter","opsSec":97565257.98615299,"samples":7},{"name":"Method","opsSec":885545935.34625,"samples":7},{"name":"DefineProperty (getter)","opsSec":938128899.2515271,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":97551410.98768552,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":939692062.9645565,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":97575742.30101319,"samples":6},{"name":"DefineProperty (writable)","opsSec":937147332.6512158,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":937303168.5070771,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":936616470.5619366,"samples":6},{"name":"DefineProperties (getter)","opsSec":97463643.90414529,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":97559390.96788846,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":70864422.712805,"samples":6}]}-->
