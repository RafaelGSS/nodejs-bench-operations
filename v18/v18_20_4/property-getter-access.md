## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|155,158,595|77610478|
|Getter|54,242,943|27144097|
|Method|105,224,637|52612330|
|DefineProperty (getter)|105,701,299|52856282|
|DefineProperty (getter & enumerable=false)|55,091,185|27545870|
|DefineProperty (getter & configurable=false)|106,993,344|53510113|
|DefineProperty (getter & enumerable=false & configurable=false)|56,892,827|28450705|
|DefineProperty (writable)|106,690,400|53345208|
|DefineProperty (writable & enumerable=false)|105,608,026|52804027|
|DefineProperty (writable & enumerable=false & configurable=false)|92,978,699|46500369|
|DefineProperties (getter)|56,817,697|28410861|
|DefineProperties (getter & enumerable=false)|56,443,663|28221833|
|DefineProperties (getter & enumerable=false & configurable=false)|56,463,976|28232003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:51:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":155158595.27802023,"samples":77610478},{"name":"Getter","opsSec":54242943.7769001,"samples":27144097},{"name":"Method","opsSec":105224637.27147834,"samples":52612330},{"name":"DefineProperty (getter)","opsSec":105701299.83528176,"samples":52856282},{"name":"DefineProperty (getter & enumerable=false)","opsSec":55091185.5623085,"samples":27545870},{"name":"DefineProperty (getter & configurable=false)","opsSec":106993344.13627245,"samples":53510113},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":56892827.7169389,"samples":28450705},{"name":"DefineProperty (writable)","opsSec":106690400.42320153,"samples":53345208},{"name":"DefineProperty (writable & enumerable=false)","opsSec":105608026.96434508,"samples":52804027},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":92978699.07300133,"samples":46500369},{"name":"DefineProperties (getter)","opsSec":56817697.488851465,"samples":28410861},{"name":"DefineProperties (getter & enumerable=false)","opsSec":56443663.403591484,"samples":28221833},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":56463976.97751584,"samples":28232003}]}-->
