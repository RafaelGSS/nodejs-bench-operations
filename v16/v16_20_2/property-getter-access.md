## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|594,551,572|96|
|Getter|61,167,029|93|
|Method|595,020,706|95|
|DefineProperty (getter)|595,186,134|98|
|DefineProperty (getter & enumerable=false)|66,374,370|96|
|DefineProperty (getter & configurable=false)|595,598,090|97|
|DefineProperty (getter & enumerable=false & configurable=false)|65,156,966|96|
|DefineProperty (writable)|546,865,838|90|
|DefineProperty (writable & enumerable=false)|101,619,505|83|
|DefineProperty (writable & enumerable=false & configurable=false)|100,902,793|82|
|DefineProperties (getter)|40,874,819|89|
|DefineProperties (getter & enumerable=false)|66,941,297|95|
|DefineProperties (getter & enumerable=false & configurable=false)|66,814,050|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":594551572.4603394,"samples":7},{"name":"Getter","opsSec":61167029.13969526,"samples":6},{"name":"Method","opsSec":595020706.2083776,"samples":7},{"name":"DefineProperty (getter)","opsSec":595186134.1062552,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":66374370.206370905,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":595598089.7739533,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":65156966.12551372,"samples":7},{"name":"DefineProperty (writable)","opsSec":546865837.6498717,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101619505.07130441,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100902792.88176225,"samples":5},{"name":"DefineProperties (getter)","opsSec":40874818.6206419,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":66941297.19096167,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":66814049.70795348,"samples":5}]}-->
