## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|601,364,682|84|
|Setter|6,290,211|87|
|Method|598,448,700|87|
|DefineProperty (setter)|581,524,509|86|
|DefineProperty (setter & enumerable=false)|5,903,149|89|
|DefineProperty (setter & configurable=false)|6,017,230|86|
|DefineProperty (setter & enumerable=false & configurable=false)|6,079,634|89|
|DefineProperty (writable)|686,630,516|90|
|DefineProperty (writable & enumerable=false)|393,884,181|55|
|DefineProperty (writable & enumerable=false & configurable=false)|75,301,593|73|
|DefineProperties (setter)|61,245,230|79|
|DefineProperties (setter & enumerable=false)|5,704,803|89|
|DefineProperties (setter & enumerable=false & configurable=false)|6,377,723|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":601364681.5545217,"samples":5},{"name":"Setter","opsSec":6290211.47022825,"samples":9},{"name":"Method","opsSec":598448699.8587598,"samples":9},{"name":"DefineProperty (setter)","opsSec":581524508.5225494,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5903148.706284188,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":6017230.33104378,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6079634.031446778,"samples":5},{"name":"DefineProperty (writable)","opsSec":686630515.6881071,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":393884181.38446265,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":75301592.6066736,"samples":6},{"name":"DefineProperties (setter)","opsSec":61245229.807232544,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5704803.095944642,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6377722.670214731,"samples":4}]}-->
