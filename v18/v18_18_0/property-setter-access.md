## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|470,236,603|95|
|Setter|7,584,404|98|
|Method|474,581,446|95|
|DefineProperty (setter)|472,719,962|95|
|DefineProperty (setter & enumerable=false)|7,238,966|96|
|DefineProperty (setter & configurable=false)|7,591,407|97|
|DefineProperty (setter & enumerable=false & configurable=false)|7,585,889|92|
|DefineProperty (writable)|706,237,900|97|
|DefineProperty (writable & enumerable=false)|114,280,867|17|
|DefineProperty (writable & enumerable=false & configurable=false)|81,183,149|80|
|DefineProperties (setter)|60,551,865|84|
|DefineProperties (setter & enumerable=false)|6,778,107|94|
|DefineProperties (setter & enumerable=false & configurable=false)|7,456,071|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":470236603.26226556,"samples":6},{"name":"Setter","opsSec":7584404.158396774,"samples":6},{"name":"Method","opsSec":474581445.67165065,"samples":7},{"name":"DefineProperty (setter)","opsSec":472719961.7573935,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7238965.5395196,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7591406.8977264045,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7585888.571802496,"samples":5},{"name":"DefineProperty (writable)","opsSec":706237900.4787194,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":114280867.02495912,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":81183148.5531953,"samples":7},{"name":"DefineProperties (setter)","opsSec":60551865.42832905,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6778106.764135617,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7456071.488787084,"samples":4}]}-->
