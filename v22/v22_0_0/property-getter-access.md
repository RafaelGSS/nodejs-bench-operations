## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,069,324|7034663|
|Getter|12,237,885|6118943|
|Method|14,026,115|7013058|
|DefineProperty (getter)|13,573,765|6786883|
|DefineProperty (getter & enumerable=false)|12,716,347|6358174|
|DefineProperty (getter & configurable=false)|14,733,882|7366942|
|DefineProperty (getter & enumerable=false & configurable=false)|12,156,780|6078391|
|DefineProperty (writable)|14,469,670|7234836|
|DefineProperty (writable & enumerable=false)|14,224,626|7112314|
|DefineProperty (writable & enumerable=false & configurable=false)|14,240,589|7120295|
|DefineProperties (getter)|11,901,843|5950922|
|DefineProperties (getter & enumerable=false)|11,875,762|5937882|
|DefineProperties (getter & enumerable=false & configurable=false)|11,957,726|5978864|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:17:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14069324.424378445,"samples":7034663},{"name":"Getter","opsSec":12237885.486195982,"samples":6118943},{"name":"Method","opsSec":14026115.270323966,"samples":7013058},{"name":"DefineProperty (getter)","opsSec":13573765.674334595,"samples":6786883},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12716347.288062327,"samples":6358174},{"name":"DefineProperty (getter & configurable=false)","opsSec":14733882.968738904,"samples":7366942},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12156780.371309306,"samples":6078391},{"name":"DefineProperty (writable)","opsSec":14469670.293352563,"samples":7234836},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14224626.719987465,"samples":7112314},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14240589.801032247,"samples":7120295},{"name":"DefineProperties (getter)","opsSec":11901843.762460114,"samples":5950922},{"name":"DefineProperties (getter & enumerable=false)","opsSec":11875762.289961888,"samples":5937882},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":11957726.732961321,"samples":5978864}]}-->
