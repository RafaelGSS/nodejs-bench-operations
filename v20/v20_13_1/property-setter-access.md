## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,741,381|9870691|
|Setter|6,807,806|3403904|
|Method|18,493,735|9246868|
|DefineProperty (setter)|18,543,293|9271647|
|DefineProperty (setter & enumerable=false)|6,764,404|3382203|
|DefineProperty (setter & configurable=false)|6,706,867|3353434|
|DefineProperty (setter & enumerable=false & configurable=false)|6,838,513|3419257|
|DefineProperty (writable)|18,657,635|9328818|
|DefineProperty (writable & enumerable=false)|18,524,794|9262398|
|DefineProperty (writable & enumerable=false & configurable=false)|18,536,507|9268254|
|DefineProperties (setter)|19,546,379|9773190|
|DefineProperties (setter & enumerable=false)|6,670,838|3335420|
|DefineProperties (setter & enumerable=false & configurable=false)|6,876,607|3438304|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:47:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":19741381.289295543,"samples":9870691},{"name":"Setter","opsSec":6807806.366126464,"samples":3403904},{"name":"Method","opsSec":18493735.33425982,"samples":9246868},{"name":"DefineProperty (setter)","opsSec":18543293.33245032,"samples":9271647},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6764404.214163854,"samples":3382203},{"name":"DefineProperty (setter & configurable=false)","opsSec":6706867.691455142,"samples":3353434},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6838513.699119426,"samples":3419257},{"name":"DefineProperty (writable)","opsSec":18657635.365628507,"samples":9328818},{"name":"DefineProperty (writable & enumerable=false)","opsSec":18524794.18459867,"samples":9262398},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18536507.851610646,"samples":9268254},{"name":"DefineProperties (setter)","opsSec":19546379.68727318,"samples":9773190},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6670838.985917779,"samples":3335420},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6876607.436097186,"samples":3438304}]}-->
