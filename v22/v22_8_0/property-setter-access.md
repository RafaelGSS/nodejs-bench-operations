## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|127,759,288|63881334|
|Setter|11,104,442|5552460|
|Method|90,029,704|45014869|
|DefineProperty (setter)|93,258,399|46629233|
|DefineProperty (setter & enumerable=false)|11,589,276|5794644|
|DefineProperty (setter & configurable=false)|11,367,055|5683531|
|DefineProperty (setter & enumerable=false & configurable=false)|11,484,775|5742393|
|DefineProperty (writable)|92,405,199|46202635|
|DefineProperty (writable & enumerable=false)|85,328,641|42665152|
|DefineProperty (writable & enumerable=false & configurable=false)|91,989,462|45996583|
|DefineProperties (setter)|91,712,668|45858734|
|DefineProperties (setter & enumerable=false)|11,251,930|5626229|
|DefineProperties (setter & enumerable=false & configurable=false)|10,903,871|5451992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:35:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":127759288.51130031,"samples":63881334},{"name":"Setter","opsSec":11104442.797675211,"samples":5552460},{"name":"Method","opsSec":90029704.68900926,"samples":45014869},{"name":"DefineProperty (setter)","opsSec":93258399.97305283,"samples":46629233},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11589276.086224183,"samples":5794644},{"name":"DefineProperty (setter & configurable=false)","opsSec":11367055.907258034,"samples":5683531},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11484775.319158955,"samples":5742393},{"name":"DefineProperty (writable)","opsSec":92405199.21761739,"samples":46202635},{"name":"DefineProperty (writable & enumerable=false)","opsSec":85328641.45674986,"samples":42665152},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":91989462.87218262,"samples":45996583},{"name":"DefineProperties (setter)","opsSec":91712668.85946393,"samples":45858734},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11251930.14945283,"samples":5626229},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10903871.27577875,"samples":5451992}]}-->
