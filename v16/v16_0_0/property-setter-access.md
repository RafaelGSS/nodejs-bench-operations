## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|646,885,449|86|
|Setter|6,416,374|97|
|Method|357,544,615|99|
|DefineProperty (setter)|610,584,206|86|
|DefineProperty (setter & enumerable=false)|6,574,597|97|
|DefineProperty (setter & configurable=false)|6,591,369|98|
|DefineProperty (setter & enumerable=false & configurable=false)|6,502,869|98|
|DefineProperty (writable)|704,239,347|92|
|DefineProperty (writable & enumerable=false)|239,455,701|36|
|DefineProperty (writable & enumerable=false & configurable=false)|81,343,319|79|
|DefineProperties (setter)|58,400,960|84|
|DefineProperties (setter & enumerable=false)|6,039,027|93|
|DefineProperties (setter & enumerable=false & configurable=false)|6,463,459|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":646885448.9081404,"samples":7},{"name":"Setter","opsSec":6416373.714309715,"samples":7},{"name":"Method","opsSec":357544615.0625766,"samples":7},{"name":"DefineProperty (setter)","opsSec":610584205.9737909,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6574596.994926109,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":6591369.161006351,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6502869.4028822705,"samples":6},{"name":"DefineProperty (writable)","opsSec":704239347.2509137,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":239455701.4753167,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":81343319.39371625,"samples":7},{"name":"DefineProperties (setter)","opsSec":58400960.090056635,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6039026.577664434,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6463459.106884909,"samples":5}]}-->
