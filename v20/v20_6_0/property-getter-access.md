## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|713,794,427|95|
|Getter|53,554,040|94|
|Method|716,968,036|94|
|DefineProperty (getter)|714,696,314|93|
|DefineProperty (getter & enumerable=false)|54,089,733|93|
|DefineProperty (getter & configurable=false)|715,139,958|94|
|DefineProperty (getter & enumerable=false & configurable=false)|53,733,340|96|
|DefineProperty (writable)|718,309,881|95|
|DefineProperty (writable & enumerable=false)|718,617,682|93|
|DefineProperty (writable & enumerable=false & configurable=false)|719,005,972|97|
|DefineProperties (getter)|54,197,751|98|
|DefineProperties (getter & enumerable=false)|53,836,247|95|
|DefineProperties (getter & enumerable=false & configurable=false)|41,155,814|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":713794427.2578541,"samples":7},{"name":"Getter","opsSec":53554040.44090825,"samples":6},{"name":"Method","opsSec":716968035.6813666,"samples":6},{"name":"DefineProperty (getter)","opsSec":714696313.8723204,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":54089733.121697314,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":715139957.516995,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":53733339.822215796,"samples":5},{"name":"DefineProperty (writable)","opsSec":718309881.113852,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":718617681.5139153,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":719005972.028061,"samples":7},{"name":"DefineProperties (getter)","opsSec":54197750.53675277,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":53836246.559407815,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":41155813.72653022,"samples":5}]}-->
