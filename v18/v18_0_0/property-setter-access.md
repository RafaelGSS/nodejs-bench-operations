## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,464,495|8232248|
|Setter|5,820,600|2910301|
|Method|16,655,072|8327537|
|DefineProperty (setter)|16,124,930|8062466|
|DefineProperty (setter & enumerable=false)|5,873,868|2936935|
|DefineProperty (setter & configurable=false)|5,859,900|2929951|
|DefineProperty (setter & enumerable=false & configurable=false)|5,808,409|2904205|
|DefineProperty (writable)|16,038,942|8019472|
|DefineProperty (writable & enumerable=false)|16,711,409|8355705|
|DefineProperty (writable & enumerable=false & configurable=false)|16,800,251|8400126|
|DefineProperties (setter)|16,227,359|8113682|
|DefineProperties (setter & enumerable=false)|5,714,814|2857408|
|DefineProperties (setter & enumerable=false & configurable=false)|5,758,021|2879011|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:24:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":16464495.16155022,"samples":8232248},{"name":"Setter","opsSec":5820600.342562284,"samples":2910301},{"name":"Method","opsSec":16655072.489949277,"samples":8327537},{"name":"DefineProperty (setter)","opsSec":16124930.329331867,"samples":8062466},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5873868.14039167,"samples":2936935},{"name":"DefineProperty (setter & configurable=false)","opsSec":5859900.181378751,"samples":2929951},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5808409.004608277,"samples":2904205},{"name":"DefineProperty (writable)","opsSec":16038942.803452145,"samples":8019472},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16711409.10216055,"samples":8355705},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16800251.795281798,"samples":8400126},{"name":"DefineProperties (setter)","opsSec":16227359.39848279,"samples":8113682},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5714814.512981965,"samples":2857408},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5758021.756088609,"samples":2879011}]}-->
