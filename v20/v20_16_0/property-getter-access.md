## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,190,768|9595385|
|Getter|15,403,678|7701840|
|Method|19,080,251|9540126|
|DefineProperty (getter)|19,503,526|9751764|
|DefineProperty (getter & enumerable=false)|15,034,188|7517095|
|DefineProperty (getter & configurable=false)|19,288,381|9644191|
|DefineProperty (getter & enumerable=false & configurable=false)|14,496,925|7248463|
|DefineProperty (writable)|17,299,254|8649628|
|DefineProperty (writable & enumerable=false)|17,565,011|8782506|
|DefineProperty (writable & enumerable=false & configurable=false)|18,649,841|9324921|
|DefineProperties (getter)|15,262,574|7631288|
|DefineProperties (getter & enumerable=false)|14,751,623|7375813|
|DefineProperties (getter & enumerable=false & configurable=false)|15,286,006|7643004|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:27:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":19190768.925022513,"samples":9595385},{"name":"Getter","opsSec":15403678.89091502,"samples":7701840},{"name":"Method","opsSec":19080251.465856068,"samples":9540126},{"name":"DefineProperty (getter)","opsSec":19503526.127795383,"samples":9751764},{"name":"DefineProperty (getter & enumerable=false)","opsSec":15034188.436516507,"samples":7517095},{"name":"DefineProperty (getter & configurable=false)","opsSec":19288381.305632073,"samples":9644191},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14496925.420751018,"samples":7248463},{"name":"DefineProperty (writable)","opsSec":17299254.47772601,"samples":8649628},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17565011.859255437,"samples":8782506},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18649841.88802085,"samples":9324921},{"name":"DefineProperties (getter)","opsSec":15262574.351925699,"samples":7631288},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14751623.787174754,"samples":7375813},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":15286006.472337537,"samples":7643004}]}-->
