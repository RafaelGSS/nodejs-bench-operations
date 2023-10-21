## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|479,549,636|93|
|Setter|8,162,315|94|
|Method|480,925,589|95|
|DefineProperty (setter)|481,384,632|98|
|DefineProperty (setter & enumerable=false)|8,308,862|93|
|DefineProperty (setter & configurable=false)|8,306,827|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,316,907|98|
|DefineProperty (writable)|483,114,504|97|
|DefineProperty (writable & enumerable=false)|484,314,558|96|
|DefineProperty (writable & enumerable=false & configurable=false)|483,714,983|97|
|DefineProperties (setter)|521,556,846|73|
|DefineProperties (setter & enumerable=false)|8,315,714|96|
|DefineProperties (setter & enumerable=false & configurable=false)|7,462,250|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":479549635.88956606,"samples":5},{"name":"Setter","opsSec":8162314.780124082,"samples":5},{"name":"Method","opsSec":480925588.9750447,"samples":7},{"name":"DefineProperty (setter)","opsSec":481384631.63604635,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8308861.525685197,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8306826.837357643,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8316906.516797279,"samples":8},{"name":"DefineProperty (writable)","opsSec":483114504.1703881,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":484314558.3213598,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":483714983.4113202,"samples":8},{"name":"DefineProperties (setter)","opsSec":521556845.56981146,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8315713.700526846,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7462250.477824795,"samples":5}]}-->
