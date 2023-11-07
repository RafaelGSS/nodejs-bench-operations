## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|848,165,527|98|
|Getter|99,585,730|97|
|Method|848,499,693|98|
|DefineProperty (getter)|848,485,096|99|
|DefineProperty (getter & enumerable=false)|99,222,363|98|
|DefineProperty (getter & configurable=false)|848,466,032|99|
|DefineProperty (getter & enumerable=false & configurable=false)|98,793,801|93|
|DefineProperty (writable)|728,790,736|86|
|DefineProperty (writable & enumerable=false)|153,744,904|76|
|DefineProperty (writable & enumerable=false & configurable=false)|848,842,519|100|
|DefineProperties (getter)|99,705,912|98|
|DefineProperties (getter & enumerable=false)|99,140,978|99|
|DefineProperties (getter & enumerable=false & configurable=false)|87,937,251|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:56:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":848165527.4401482,"samples":7},{"name":"Getter","opsSec":99585730.22863682,"samples":6},{"name":"Method","opsSec":848499693.3287188,"samples":8},{"name":"DefineProperty (getter)","opsSec":848485096.2122699,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":99222362.64085212,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":848466031.7790617,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":98793800.67698684,"samples":6},{"name":"DefineProperty (writable)","opsSec":728790736.2857723,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":153744904.2374962,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":848842519.2233855,"samples":6},{"name":"DefineProperties (getter)","opsSec":99705912.21597098,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":99140977.50731769,"samples":9},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":87937250.84317428,"samples":7}]}-->
