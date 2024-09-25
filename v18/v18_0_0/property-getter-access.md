## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|17,647,535|8823768|
|Getter|14,227,404|7113703|
|Method|15,741,581|7870791|
|DefineProperty (getter)|17,731,080|8865541|
|DefineProperty (getter & enumerable=false)|14,854,105|7427055|
|DefineProperty (getter & configurable=false)|16,938,658|8469330|
|DefineProperty (getter & enumerable=false & configurable=false)|14,997,356|7498679|
|DefineProperty (writable)|17,467,598|8733800|
|DefineProperty (writable & enumerable=false)|17,413,779|8706890|
|DefineProperty (writable & enumerable=false & configurable=false)|17,778,558|8889280|
|DefineProperties (getter)|14,736,995|7368498|
|DefineProperties (getter & enumerable=false)|14,595,879|7297940|
|DefineProperties (getter & enumerable=false & configurable=false)|14,378,650|7189326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:01:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":17647535.846754946,"samples":8823768},{"name":"Getter","opsSec":14227404.422259932,"samples":7113703},{"name":"Method","opsSec":15741581.489521729,"samples":7870791},{"name":"DefineProperty (getter)","opsSec":17731080.56525361,"samples":8865541},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14854105.271827932,"samples":7427055},{"name":"DefineProperty (getter & configurable=false)","opsSec":16938658.882978637,"samples":8469330},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14997356.897526996,"samples":7498679},{"name":"DefineProperty (writable)","opsSec":17467598.60225611,"samples":8733800},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17413779.472660523,"samples":8706890},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17778558.35947569,"samples":8889280},{"name":"DefineProperties (getter)","opsSec":14736995.532804517,"samples":7368498},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14595879.767877866,"samples":7297940},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14378650.317373758,"samples":7189326}]}-->
