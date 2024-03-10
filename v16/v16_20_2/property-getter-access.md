## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|821,952,734|95|
|Getter|79,973,766|97|
|Method|819,794,080|99|
|DefineProperty (getter)|818,393,840|96|
|DefineProperty (getter & enumerable=false)|80,029,591|97|
|DefineProperty (getter & configurable=false)|819,652,149|96|
|DefineProperty (getter & enumerable=false & configurable=false)|79,772,527|93|
|DefineProperty (writable)|822,363,733|89|
|DefineProperty (writable & enumerable=false)|823,704,942|97|
|DefineProperty (writable & enumerable=false & configurable=false)|124,460,267|19|
|DefineProperties (getter)|49,899,521|93|
|DefineProperties (getter & enumerable=false)|80,328,836|99|
|DefineProperties (getter & enumerable=false & configurable=false)|80,415,387|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":821952733.5351921,"samples":6},{"name":"Getter","opsSec":79973765.74624749,"samples":6},{"name":"Method","opsSec":819794080.2476497,"samples":8},{"name":"DefineProperty (getter)","opsSec":818393840.4259863,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":80029591.25384481,"samples":8},{"name":"DefineProperty (getter & configurable=false)","opsSec":819652148.6973997,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":79772527.48646404,"samples":6},{"name":"DefineProperty (writable)","opsSec":822363733.4780642,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":823704942.1735386,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":124460266.68509383,"samples":8},{"name":"DefineProperties (getter)","opsSec":49899521.41160471,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":80328836.4872614,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":80415386.55203202,"samples":6}]}-->
