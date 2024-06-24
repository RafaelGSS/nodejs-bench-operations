## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,753,508|9876755|
|Setter|6,681,005|3340503|
|Method|19,526,157|9763079|
|DefineProperty (setter)|19,782,853|9891427|
|DefineProperty (setter & enumerable=false)|6,547,926|3273964|
|DefineProperty (setter & configurable=false)|6,704,459|3352230|
|DefineProperty (setter & enumerable=false & configurable=false)|6,791,533|3395767|
|DefineProperty (writable)|19,615,161|9807581|
|DefineProperty (writable & enumerable=false)|19,605,862|9802932|
|DefineProperty (writable & enumerable=false & configurable=false)|19,574,751|9787481|
|DefineProperties (setter)|19,565,143|9782572|
|DefineProperties (setter & enumerable=false)|6,817,367|3408684|
|DefineProperties (setter & enumerable=false & configurable=false)|6,898,823|3449412|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:48:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":19753508.498708483,"samples":9876755},{"name":"Setter","opsSec":6681005.131467799,"samples":3340503},{"name":"Method","opsSec":19526157.023730744,"samples":9763079},{"name":"DefineProperty (setter)","opsSec":19782853.683491506,"samples":9891427},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6547926.179671284,"samples":3273964},{"name":"DefineProperty (setter & configurable=false)","opsSec":6704459.5440787915,"samples":3352230},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6791533.633254638,"samples":3395767},{"name":"DefineProperty (writable)","opsSec":19615161.37216263,"samples":9807581},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19605862.666864082,"samples":9802932},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19574751.297192905,"samples":9787481},{"name":"DefineProperties (setter)","opsSec":19565143.33457137,"samples":9782572},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6817367.495632293,"samples":3408684},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6898823.986271116,"samples":3449412}]}-->
