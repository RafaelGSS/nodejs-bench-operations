## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|850,029,434|100|
|Getter|92,344,900|97|
|Method|850,428,726|97|
|DefineProperty (getter)|849,866,240|99|
|DefineProperty (getter & enumerable=false)|93,684,577|96|
|DefineProperty (getter & configurable=false)|848,791,193|100|
|DefineProperty (getter & enumerable=false & configurable=false)|93,702,349|97|
|DefineProperty (writable)|848,446,985|97|
|DefineProperty (writable & enumerable=false)|849,548,973|98|
|DefineProperty (writable & enumerable=false & configurable=false)|164,337,971|23|
|DefineProperties (getter)|58,854,739|93|
|DefineProperties (getter & enumerable=false)|93,302,758|97|
|DefineProperties (getter & enumerable=false & configurable=false)|93,742,216|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:53:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":850029434.3282126,"samples":6},{"name":"Getter","opsSec":92344899.56958947,"samples":5},{"name":"Method","opsSec":850428726.2542101,"samples":7},{"name":"DefineProperty (getter)","opsSec":849866240.3648822,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":93684577.25135566,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":848791193.3648393,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":93702349.47712547,"samples":5},{"name":"DefineProperty (writable)","opsSec":848446985.1862284,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849548973.1576467,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":164337970.95195612,"samples":7},{"name":"DefineProperties (getter)","opsSec":58854739.373962924,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":93302757.8796666,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":93742215.52711877,"samples":6}]}-->
