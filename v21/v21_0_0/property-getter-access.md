## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,993,012|7496507|
|Getter|12,420,753|6210377|
|Method|15,163,632|7581817|
|DefineProperty (getter)|15,213,082|7606542|
|DefineProperty (getter & enumerable=false)|12,753,804|6376903|
|DefineProperty (getter & configurable=false)|15,277,705|7638853|
|DefineProperty (getter & enumerable=false & configurable=false)|12,965,853|6482927|
|DefineProperty (writable)|15,363,029|7681515|
|DefineProperty (writable & enumerable=false)|15,093,144|7546573|
|DefineProperty (writable & enumerable=false & configurable=false)|15,133,598|7566801|
|DefineProperties (getter)|12,864,111|6432056|
|DefineProperties (getter & enumerable=false)|12,851,457|6425729|
|DefineProperties (getter & enumerable=false & configurable=false)|13,005,026|6502514|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:29:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14993012.808648575,"samples":7496507},{"name":"Getter","opsSec":12420753.7548567,"samples":6210377},{"name":"Method","opsSec":15163632.753854116,"samples":7581817},{"name":"DefineProperty (getter)","opsSec":15213082.978863174,"samples":7606542},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12753804.531130623,"samples":6376903},{"name":"DefineProperty (getter & configurable=false)","opsSec":15277705.860048745,"samples":7638853},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12965853.135788364,"samples":6482927},{"name":"DefineProperty (writable)","opsSec":15363029.952955503,"samples":7681515},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15093144.71955743,"samples":7546573},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15133598.324329289,"samples":7566801},{"name":"DefineProperties (getter)","opsSec":12864111.881056227,"samples":6432056},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12851457.232461445,"samples":6425729},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13005026.27633491,"samples":6502514}]}-->
