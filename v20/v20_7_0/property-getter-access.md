## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|714,615,317|96|
|Getter|53,870,780|93|
|Method|716,452,378|98|
|DefineProperty (getter)|715,538,115|95|
|DefineProperty (getter & enumerable=false)|53,908,067|97|
|DefineProperty (getter & configurable=false)|718,525,817|93|
|DefineProperty (getter & enumerable=false & configurable=false)|54,016,775|92|
|DefineProperty (writable)|718,052,402|99|
|DefineProperty (writable & enumerable=false)|718,545,891|96|
|DefineProperty (writable & enumerable=false & configurable=false)|580,335,910|79|
|DefineProperties (getter)|31,407,274|90|
|DefineProperties (getter & enumerable=false)|53,747,842|97|
|DefineProperties (getter & enumerable=false & configurable=false)|53,707,570|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":714615317.0029291,"samples":5},{"name":"Getter","opsSec":53870779.5812216,"samples":5},{"name":"Method","opsSec":716452377.9487798,"samples":7},{"name":"DefineProperty (getter)","opsSec":715538114.8435581,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":53908067.316230446,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":718525817.3254031,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":54016774.85270814,"samples":5},{"name":"DefineProperty (writable)","opsSec":718052401.8665624,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":718545890.6598184,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":580335910.4936612,"samples":6},{"name":"DefineProperties (getter)","opsSec":31407273.892356824,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":53747842.14102682,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53707569.71721647,"samples":6}]}-->
