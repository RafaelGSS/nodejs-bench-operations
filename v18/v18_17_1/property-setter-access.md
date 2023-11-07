## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|837,463,070|99|
|Setter|12,298,574|98|
|Method|840,209,593|95|
|DefineProperty (setter)|836,526,141|99|
|DefineProperty (setter & enumerable=false)|11,964,395|98|
|DefineProperty (setter & configurable=false)|11,910,251|98|
|DefineProperty (setter & enumerable=false & configurable=false)|12,158,764|94|
|DefineProperty (writable)|847,212,462|99|
|DefineProperty (writable & enumerable=false)|847,888,080|100|
|DefineProperty (writable & enumerable=false & configurable=false)|759,110,901|94|
|DefineProperties (setter)|847,263,305|99|
|DefineProperties (setter & enumerable=false)|12,106,630|99|
|DefineProperties (setter & enumerable=false & configurable=false)|11,230,873|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:19:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":837463069.9789054,"samples":6},{"name":"Setter","opsSec":12298573.929095024,"samples":4},{"name":"Method","opsSec":840209593.006974,"samples":7},{"name":"DefineProperty (setter)","opsSec":836526141.2567295,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11964395.282391323,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":11910250.887427762,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12158763.79304588,"samples":5},{"name":"DefineProperty (writable)","opsSec":847212462.3164654,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":847888079.6332977,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":759110901.4776801,"samples":8},{"name":"DefineProperties (setter)","opsSec":847263305.1039709,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12106629.63266382,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11230873.244725624,"samples":6}]}-->
