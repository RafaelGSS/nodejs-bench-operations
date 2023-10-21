## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|589,106,395|98|
|Setter|6,995,880|96|
|Method|593,936,804|94|
|DefineProperty (setter)|599,009,099|98|
|DefineProperty (setter & enumerable=false)|7,083,265|98|
|DefineProperty (setter & configurable=false)|7,026,046|95|
|DefineProperty (setter & enumerable=false & configurable=false)|7,069,203|97|
|DefineProperty (writable)|593,545,630|99|
|DefineProperty (writable & enumerable=false)|593,296,019|92|
|DefineProperty (writable & enumerable=false & configurable=false)|592,734,753|99|
|DefineProperties (setter)|421,072,690|71|
|DefineProperties (setter & enumerable=false)|6,474,238|93|
|DefineProperties (setter & enumerable=false & configurable=false)|6,453,124|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":589106395.1793841,"samples":7},{"name":"Setter","opsSec":6995880.185857986,"samples":5},{"name":"Method","opsSec":593936804.2727225,"samples":6},{"name":"DefineProperty (setter)","opsSec":599009099.060212,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7083264.74913048,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":7026046.378648115,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7069202.985811434,"samples":6},{"name":"DefineProperty (writable)","opsSec":593545629.7144632,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":593296019.303731,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":592734753.1177807,"samples":7},{"name":"DefineProperties (setter)","opsSec":421072689.84063864,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6474238.453350586,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6453123.8428842975,"samples":4}]}-->
