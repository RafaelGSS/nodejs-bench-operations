## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|565,479,441|87|
|Setter|6,089,148|80|
|Method|556,253,668|86|
|DefineProperty (setter)|591,011,175|84|
|DefineProperty (setter & enumerable=false)|6,122,347|86|
|DefineProperty (setter & configurable=false)|6,199,691|87|
|DefineProperty (setter & enumerable=false & configurable=false)|6,328,798|88|
|DefineProperty (writable)|749,788,309|89|
|DefineProperty (writable & enumerable=false)|709,493,995|88|
|DefineProperty (writable & enumerable=false & configurable=false)|298,690,054|39|
|DefineProperties (setter)|63,206,086|83|
|DefineProperties (setter & enumerable=false)|5,442,151|86|
|DefineProperties (setter & enumerable=false & configurable=false)|6,055,892|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":565479440.6860716,"samples":9},{"name":"Setter","opsSec":6089148.410142022,"samples":4},{"name":"Method","opsSec":556253667.633867,"samples":7},{"name":"DefineProperty (setter)","opsSec":591011174.6056019,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6122347.195100799,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":6199691.106368897,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6328797.903634679,"samples":4},{"name":"DefineProperty (writable)","opsSec":749788308.5553318,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":709493995.2111896,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":298690053.83505774,"samples":9},{"name":"DefineProperties (setter)","opsSec":63206086.10832718,"samples":4},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5442151.385316371,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6055892.07276642,"samples":4}]}-->
