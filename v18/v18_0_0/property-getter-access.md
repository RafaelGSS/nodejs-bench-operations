## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|712,602,775|98|
|Getter|58,182,048|96|
|Method|710,581,400|97|
|DefineProperty (getter)|707,698,014|99|
|DefineProperty (getter & enumerable=false)|58,269,244|96|
|DefineProperty (getter & configurable=false)|711,974,444|97|
|DefineProperty (getter & enumerable=false & configurable=false)|58,299,568|97|
|DefineProperty (writable)|670,196,512|95|
|DefineProperty (writable & enumerable=false)|89,719,768|87|
|DefineProperty (writable & enumerable=false & configurable=false)|89,779,470|86|
|DefineProperties (getter)|35,971,399|86|
|DefineProperties (getter & enumerable=false)|58,076,682|96|
|DefineProperties (getter & enumerable=false & configurable=false)|55,902,306|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":712602775.3690449,"samples":10},{"name":"Getter","opsSec":58182048.21085734,"samples":6},{"name":"Method","opsSec":710581400.0670455,"samples":7},{"name":"DefineProperty (getter)","opsSec":707698014.3866959,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":58269244.11871758,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":711974444.3163246,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":58299568.24213313,"samples":6},{"name":"DefineProperty (writable)","opsSec":670196511.5836,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":89719768.14834878,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":89779469.73952636,"samples":5},{"name":"DefineProperties (getter)","opsSec":35971399.054644056,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":58076681.602407776,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":55902305.8354464,"samples":5}]}-->
