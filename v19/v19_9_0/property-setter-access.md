## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|578,360,642|91|
|Setter|6,114,925|87|
|Method|578,204,716|90|
|DefineProperty (setter)|571,544,430|90|
|DefineProperty (setter & enumerable=false)|5,951,347|89|
|DefineProperty (setter & configurable=false)|5,913,990|89|
|DefineProperty (setter & enumerable=false & configurable=false)|6,064,959|90|
|DefineProperty (writable)|683,452,986|90|
|DefineProperty (writable & enumerable=false)|686,646,617|86|
|DefineProperty (writable & enumerable=false & configurable=false)|692,034,100|91|
|DefineProperties (setter)|686,857,088|87|
|DefineProperties (setter & enumerable=false)|5,646,579|85|
|DefineProperties (setter & enumerable=false & configurable=false)|5,445,289|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":578360641.9612421,"samples":8},{"name":"Setter","opsSec":6114925.216746814,"samples":4},{"name":"Method","opsSec":578204715.9669001,"samples":9},{"name":"DefineProperty (setter)","opsSec":571544429.5353497,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5951347.333658515,"samples":9},{"name":"DefineProperty (setter & configurable=false)","opsSec":5913990.215706207,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6064958.902013326,"samples":4},{"name":"DefineProperty (writable)","opsSec":683452985.684821,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":686646616.8445038,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":692034099.7572569,"samples":8},{"name":"DefineProperties (setter)","opsSec":686857087.8852257,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5646578.867567056,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5445288.962831583,"samples":4}]}-->
