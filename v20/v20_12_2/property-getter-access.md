## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|936,698,386|98|
|Getter|96,231,029|94|
|Method|886,184,273|99|
|DefineProperty (getter)|938,989,576|100|
|DefineProperty (getter & enumerable=false)|97,853,944|95|
|DefineProperty (getter & configurable=false)|938,893,614|100|
|DefineProperty (getter & enumerable=false & configurable=false)|97,764,462|93|
|DefineProperty (writable)|938,929,456|94|
|DefineProperty (writable & enumerable=false)|939,653,691|95|
|DefineProperty (writable & enumerable=false & configurable=false)|939,531,869|98|
|DefineProperties (getter)|96,507,808|92|
|DefineProperties (getter & enumerable=false)|98,040,272|94|
|DefineProperties (getter & enumerable=false & configurable=false)|73,529,232|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:45:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":936698386.0082903,"samples":6},{"name":"Getter","opsSec":96231029.35264881,"samples":6},{"name":"Method","opsSec":886184273.102178,"samples":6},{"name":"DefineProperty (getter)","opsSec":938989576.1644263,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":97853943.57976204,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":938893614.0210476,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":97764462.07014099,"samples":6},{"name":"DefineProperty (writable)","opsSec":938929455.7672815,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":939653691.102313,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":939531868.711986,"samples":7},{"name":"DefineProperties (getter)","opsSec":96507808.38984635,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":98040272.094829,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":73529231.52389145,"samples":6}]}-->
