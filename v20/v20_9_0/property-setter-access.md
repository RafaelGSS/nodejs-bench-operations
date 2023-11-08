## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|840,398,386|97|
|Setter|12,523,903|99|
|Method|843,324,101|98|
|DefineProperty (setter)|840,220,471|99|
|DefineProperty (setter & enumerable=false)|12,657,038|99|
|DefineProperty (setter & configurable=false)|12,839,287|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,738,305|99|
|DefineProperty (writable)|845,442,571|100|
|DefineProperty (writable & enumerable=false)|845,316,357|98|
|DefineProperty (writable & enumerable=false & configurable=false)|842,969,500|96|
|DefineProperties (setter)|845,814,773|98|
|DefineProperties (setter & enumerable=false)|11,865,508|94|
|DefineProperties (setter & enumerable=false & configurable=false)|11,581,846|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:47:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":840398385.9269805,"samples":7},{"name":"Setter","opsSec":12523903.091262385,"samples":5},{"name":"Method","opsSec":843324101.0436583,"samples":6},{"name":"DefineProperty (setter)","opsSec":840220470.9087466,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12657038.46545651,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":12839287.461954124,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12738305.240842918,"samples":6},{"name":"DefineProperty (writable)","opsSec":845442570.8162605,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":845316357.1990849,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":842969500.4378388,"samples":6},{"name":"DefineProperties (setter)","opsSec":845814772.7113987,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11865507.702783851,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11581846.419699987,"samples":5}]}-->
