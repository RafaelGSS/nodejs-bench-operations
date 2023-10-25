## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|710,436,481|95|
|Getter|52,119,192|96|
|Method|710,506,171|96|
|DefineProperty (getter)|709,717,123|97|
|DefineProperty (getter & enumerable=false)|52,756,222|94|
|DefineProperty (getter & configurable=false)|710,899,195|97|
|DefineProperty (getter & enumerable=false & configurable=false)|52,702,988|95|
|DefineProperty (writable)|709,887,304|89|
|DefineProperty (writable & enumerable=false)|580,419,694|80|
|DefineProperty (writable & enumerable=false & configurable=false)|84,501,654|83|
|DefineProperties (getter)|33,212,732|92|
|DefineProperties (getter & enumerable=false)|52,943,034|96|
|DefineProperties (getter & enumerable=false & configurable=false)|52,057,213|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":710436481.2981313,"samples":9},{"name":"Getter","opsSec":52119192.01172317,"samples":8},{"name":"Method","opsSec":710506171.496514,"samples":9},{"name":"DefineProperty (getter)","opsSec":709717123.3892738,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52756222.2750438,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":710899194.8022579,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52702988.007969104,"samples":5},{"name":"DefineProperty (writable)","opsSec":709887303.5698329,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":580419693.9888588,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":84501653.98116386,"samples":6},{"name":"DefineProperties (getter)","opsSec":33212731.67153521,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52943034.316436045,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52057213.12892882,"samples":5}]}-->
