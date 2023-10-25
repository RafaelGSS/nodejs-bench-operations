## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|591,466,527|96|
|Getter|69,535,468|95|
|Method|592,087,258|97|
|DefineProperty (getter)|592,085,909|97|
|DefineProperty (getter & enumerable=false)|69,729,867|97|
|DefineProperty (getter & configurable=false)|592,990,816|98|
|DefineProperty (getter & enumerable=false & configurable=false)|69,833,000|98|
|DefineProperty (writable)|592,640,275|94|
|DefineProperty (writable & enumerable=false)|593,467,214|100|
|DefineProperty (writable & enumerable=false & configurable=false)|453,956,589|80|
|DefineProperties (getter)|44,174,344|90|
|DefineProperties (getter & enumerable=false)|69,871,166|97|
|DefineProperties (getter & enumerable=false & configurable=false)|69,743,205|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":591466526.5777628,"samples":6},{"name":"Getter","opsSec":69535467.85248336,"samples":8},{"name":"Method","opsSec":592087257.8198944,"samples":6},{"name":"DefineProperty (getter)","opsSec":592085909.4186918,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":69729866.79722854,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":592990816.4461273,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":69833000.05404428,"samples":5},{"name":"DefineProperty (writable)","opsSec":592640275.2718022,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":593467214.4413372,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":453956589.11946875,"samples":6},{"name":"DefineProperties (getter)","opsSec":44174343.85041053,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":69871166.17309487,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":69743204.60904191,"samples":6}]}-->
