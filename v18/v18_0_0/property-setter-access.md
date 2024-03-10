## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|777,354,083|99|
|Setter|9,464,535|94|
|Method|775,025,214|95|
|DefineProperty (setter)|780,726,110|93|
|DefineProperty (setter & enumerable=false)|9,867,644|96|
|DefineProperty (setter & configurable=false)|9,392,012|95|
|DefineProperty (setter & enumerable=false & configurable=false)|9,536,441|93|
|DefineProperty (writable)|817,946,450|94|
|DefineProperty (writable & enumerable=false)|819,847,123|97|
|DefineProperty (writable & enumerable=false & configurable=false)|787,814,013|95|
|DefineProperties (setter)|104,515,643|89|
|DefineProperties (setter & enumerable=false)|9,521,432|93|
|DefineProperties (setter & enumerable=false & configurable=false)|9,563,978|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":777354083.0701233,"samples":6},{"name":"Setter","opsSec":9464535.29509669,"samples":7},{"name":"Method","opsSec":775025213.9300258,"samples":7},{"name":"DefineProperty (setter)","opsSec":780726110.0709016,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9867643.991677513,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":9392012.4760889,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9536440.838168189,"samples":4},{"name":"DefineProperty (writable)","opsSec":817946450.4340818,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":819847122.6734043,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":787814013.2854455,"samples":8},{"name":"DefineProperties (setter)","opsSec":104515643.25055137,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9521432.136503838,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9563978.258000279,"samples":4}]}-->
