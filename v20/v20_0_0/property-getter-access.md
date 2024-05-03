## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|916,885,246|95|
|Getter|98,674,587|97|
|Method|916,695,746|95|
|DefineProperty (getter)|916,859,065|97|
|DefineProperty (getter & enumerable=false)|98,701,345|98|
|DefineProperty (getter & configurable=false)|916,930,754|96|
|DefineProperty (getter & enumerable=false & configurable=false)|98,349,970|97|
|DefineProperty (writable)|916,265,747|98|
|DefineProperty (writable & enumerable=false)|914,827,639|99|
|DefineProperty (writable & enumerable=false & configurable=false)|914,306,947|97|
|DefineProperties (getter)|98,241,263|99|
|DefineProperties (getter & enumerable=false)|95,584,091|94|
|DefineProperties (getter & enumerable=false & configurable=false)|61,111,848|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:46:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":916885245.867472,"samples":8},{"name":"Getter","opsSec":98674587.05188034,"samples":5},{"name":"Method","opsSec":916695745.838416,"samples":7},{"name":"DefineProperty (getter)","opsSec":916859065.2549706,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":98701345.45336883,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":916930753.5835447,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":98349969.51240472,"samples":5},{"name":"DefineProperty (writable)","opsSec":916265746.5723487,"samples":10},{"name":"DefineProperty (writable & enumerable=false)","opsSec":914827638.9594095,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":914306946.853288,"samples":6},{"name":"DefineProperties (getter)","opsSec":98241262.90627857,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":95584091.48364554,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":61111847.69274824,"samples":4}]}-->
