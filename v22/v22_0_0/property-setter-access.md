## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,868,906|7934454|
|Setter|6,606,385|3303193|
|Method|15,841,436|7920719|
|DefineProperty (setter)|15,782,830|7891416|
|DefineProperty (setter & enumerable=false)|6,654,243|3327122|
|DefineProperty (setter & configurable=false)|6,564,923|3282462|
|DefineProperty (setter & enumerable=false & configurable=false)|6,666,776|3333389|
|DefineProperty (writable)|15,923,404|7961703|
|DefineProperty (writable & enumerable=false)|15,955,181|7977591|
|DefineProperty (writable & enumerable=false & configurable=false)|15,911,025|7955513|
|DefineProperties (setter)|15,950,388|7975195|
|DefineProperties (setter & enumerable=false)|6,694,553|3347277|
|DefineProperties (setter & enumerable=false & configurable=false)|6,690,028|3345015|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:21:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15868906.603551507,"samples":7934454},{"name":"Setter","opsSec":6606385.326165245,"samples":3303193},{"name":"Method","opsSec":15841436.574352406,"samples":7920719},{"name":"DefineProperty (setter)","opsSec":15782830.579529034,"samples":7891416},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6654243.840304291,"samples":3327122},{"name":"DefineProperty (setter & configurable=false)","opsSec":6564923.737406592,"samples":3282462},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6666776.453338529,"samples":3333389},{"name":"DefineProperty (writable)","opsSec":15923404.375817303,"samples":7961703},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15955181.265910497,"samples":7977591},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15911025.39533649,"samples":7955513},{"name":"DefineProperties (setter)","opsSec":15950388.947293123,"samples":7975195},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6694553.718737465,"samples":3347277},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6690028.541574257,"samples":3345015}]}-->
