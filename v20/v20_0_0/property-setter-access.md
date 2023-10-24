## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|396,617,719|94|
|Setter|6,828,618|91|
|Method|391,813,331|90|
|DefineProperty (setter)|399,100,606|93|
|DefineProperty (setter & enumerable=false)|6,898,275|90|
|DefineProperty (setter & configurable=false)|7,044,538|94|
|DefineProperty (setter & enumerable=false & configurable=false)|7,035,944|94|
|DefineProperty (writable)|402,224,376|87|
|DefineProperty (writable & enumerable=false)|280,159,560|70|
|DefineProperty (writable & enumerable=false & configurable=false)|55,754,707|84|
|DefineProperties (setter)|54,625,526|83|
|DefineProperties (setter & enumerable=false)|7,044,236|95|
|DefineProperties (setter & enumerable=false & configurable=false)|6,886,912|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Setter (class)","opsSec":396617719.010722,"samples":8},{"name":"Setter","opsSec":6828618.412427349,"samples":5},{"name":"Method","opsSec":391813330.60787356,"samples":5},{"name":"DefineProperty (setter)","opsSec":399100605.9157159,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6898274.597480792,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":7044538.425773791,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7035943.559255922,"samples":5},{"name":"DefineProperty (writable)","opsSec":402224375.9946697,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":280159559.6869739,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":55754706.9962461,"samples":5},{"name":"DefineProperties (setter)","opsSec":54625525.81436064,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7044235.856733413,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6886912.31019085,"samples":5}]}-->
