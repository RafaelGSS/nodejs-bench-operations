## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|846,241,654|96|
|Getter|89,239,132|97|
|Method|797,748,896|95|
|DefineProperty (getter)|844,318,268|97|
|DefineProperty (getter & enumerable=false)|89,239,372|99|
|DefineProperty (getter & configurable=false)|847,717,291|98|
|DefineProperty (getter & enumerable=false & configurable=false)|89,041,882|97|
|DefineProperty (writable)|849,182,188|100|
|DefineProperty (writable & enumerable=false)|844,667,368|99|
|DefineProperty (writable & enumerable=false & configurable=false)|386,690,821|46|
|DefineProperties (getter)|54,844,348|92|
|DefineProperties (getter & enumerable=false)|89,163,999|99|
|DefineProperties (getter & enumerable=false & configurable=false)|88,869,638|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":846241654.4688724,"samples":7},{"name":"Getter","opsSec":89239132.40106794,"samples":6},{"name":"Method","opsSec":797748896.4160079,"samples":6},{"name":"DefineProperty (getter)","opsSec":844318268.1642979,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":89239372.00187592,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":847717291.2581606,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":89041882.24528636,"samples":5},{"name":"DefineProperty (writable)","opsSec":849182187.8601326,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":844667367.6074457,"samples":10},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":386690821.3081952,"samples":7},{"name":"DefineProperties (getter)","opsSec":54844348.25793613,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":89163999.08928478,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":88869638.11895086,"samples":5}]}-->
