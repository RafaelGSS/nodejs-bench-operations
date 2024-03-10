## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|826,057,658|98|
|Getter|89,409,124|95|
|Method|824,143,565|95|
|DefineProperty (getter)|823,980,707|97|
|DefineProperty (getter & enumerable=false)|89,751,788|99|
|DefineProperty (getter & configurable=false)|823,827,826|95|
|DefineProperty (getter & enumerable=false & configurable=false)|89,624,354|94|
|DefineProperty (writable)|825,054,470|97|
|DefineProperty (writable & enumerable=false)|826,514,827|99|
|DefineProperty (writable & enumerable=false & configurable=false)|827,016,412|99|
|DefineProperties (getter)|90,285,673|96|
|DefineProperties (getter & enumerable=false)|71,080,658|79|
|DefineProperties (getter & enumerable=false & configurable=false)|55,433,081|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Getter (class)","opsSec":826057657.8734856,"samples":6},{"name":"Getter","opsSec":89409124.27581047,"samples":7},{"name":"Method","opsSec":824143565.3531018,"samples":6},{"name":"DefineProperty (getter)","opsSec":823980707.3974905,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":89751788.22528927,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":823827826.4302897,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":89624354.24442597,"samples":5},{"name":"DefineProperty (writable)","opsSec":825054470.43199,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":826514827.0910897,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":827016412.1926733,"samples":7},{"name":"DefineProperties (getter)","opsSec":90285672.5680333,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":71080658.34511052,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":55433080.65318801,"samples":5}]}-->
