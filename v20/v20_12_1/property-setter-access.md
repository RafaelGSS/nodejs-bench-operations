## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|862,018,918|93|
|Setter|12,962,126|96|
|Method|696,804,213|98|
|DefineProperty (setter)|869,580,992|99|
|DefineProperty (setter & enumerable=false)|12,819,386|96|
|DefineProperty (setter & configurable=false)|12,477,834|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,582,702|96|
|DefineProperty (writable)|872,379,251|96|
|DefineProperty (writable & enumerable=false)|872,100,820|99|
|DefineProperty (writable & enumerable=false & configurable=false)|871,444,707|97|
|DefineProperties (setter)|722,300,461|76|
|DefineProperties (setter & enumerable=false)|12,847,889|97|
|DefineProperties (setter & enumerable=false & configurable=false)|11,907,736|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:02:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":862018917.6438955,"samples":6},{"name":"Setter","opsSec":12962126.15287049,"samples":4},{"name":"Method","opsSec":696804212.5336691,"samples":7},{"name":"DefineProperty (setter)","opsSec":869580991.6753279,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12819386.478882676,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12477833.96616026,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12582701.946795821,"samples":6},{"name":"DefineProperty (writable)","opsSec":872379251.4601649,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":872100819.73361,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":871444707.2174487,"samples":6},{"name":"DefineProperties (setter)","opsSec":722300460.9458115,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12847888.549730945,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11907736.32691347,"samples":4}]}-->
