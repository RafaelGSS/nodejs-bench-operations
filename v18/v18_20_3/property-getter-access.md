## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,675,457|7337729|
|Getter|12,919,895|6459948|
|Method|14,988,097|7494049|
|DefineProperty (getter)|14,660,044|7330023|
|DefineProperty (getter & enumerable=false)|12,831,994|6415998|
|DefineProperty (getter & configurable=false)|15,210,508|7605255|
|DefineProperty (getter & enumerable=false & configurable=false)|13,055,412|6527707|
|DefineProperty (writable)|14,879,456|7439729|
|DefineProperty (writable & enumerable=false)|15,237,602|7618802|
|DefineProperty (writable & enumerable=false & configurable=false)|15,428,052|7714027|
|DefineProperties (getter)|13,032,813|6516407|
|DefineProperties (getter & enumerable=false)|12,808,948|6404475|
|DefineProperties (getter & enumerable=false & configurable=false)|12,991,595|6495798|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:19:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14675457.449196331,"samples":7337729},{"name":"Getter","opsSec":12919895.240358522,"samples":6459948},{"name":"Method","opsSec":14988097.664934076,"samples":7494049},{"name":"DefineProperty (getter)","opsSec":14660044.534571473,"samples":7330023},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12831994.682982156,"samples":6415998},{"name":"DefineProperty (getter & configurable=false)","opsSec":15210508.070775837,"samples":7605255},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13055412.703142332,"samples":6527707},{"name":"DefineProperty (writable)","opsSec":14879456.22157445,"samples":7439729},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15237602.311596949,"samples":7618802},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15428052.651028337,"samples":7714027},{"name":"DefineProperties (getter)","opsSec":13032813.684175652,"samples":6516407},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12808948.576791212,"samples":6404475},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12991595.339616604,"samples":6495798}]}-->
