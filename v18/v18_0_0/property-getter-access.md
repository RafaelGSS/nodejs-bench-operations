## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|819,709,965|99|
|Getter|91,494,060|91|
|Method|817,955,722|98|
|DefineProperty (getter)|817,110,829|97|
|DefineProperty (getter & enumerable=false)|90,087,528|92|
|DefineProperty (getter & configurable=false)|818,090,378|97|
|DefineProperty (getter & enumerable=false & configurable=false)|90,613,797|96|
|DefineProperty (writable)|817,568,506|96|
|DefineProperty (writable & enumerable=false)|558,971,215|68|
|DefineProperty (writable & enumerable=false & configurable=false)|134,447,359|84|
|DefineProperties (getter)|57,005,616|90|
|DefineProperties (getter & enumerable=false)|91,599,840|97|
|DefineProperties (getter & enumerable=false & configurable=false)|91,554,399|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":819709965.2710298,"samples":6},{"name":"Getter","opsSec":91494060.11837439,"samples":7},{"name":"Method","opsSec":817955721.6933646,"samples":6},{"name":"DefineProperty (getter)","opsSec":817110829.109404,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":90087527.64121275,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":818090378.2943256,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":90613797.2865207,"samples":6},{"name":"DefineProperty (writable)","opsSec":817568505.9505213,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":558971214.9445217,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":134447359.1799591,"samples":6},{"name":"DefineProperties (getter)","opsSec":57005615.57898212,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":91599839.8956991,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":91554398.72831331,"samples":7}]}-->
