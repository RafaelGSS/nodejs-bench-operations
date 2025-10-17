## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,510,741|47770006|
|Getter|54,403,530|27201772|
|Method|93,432,730|46716386|
|DefineProperty (getter)|95,682,587|47850418|
|DefineProperty (getter & enumerable=false)|54,022,814|27015995|
|DefineProperty (getter & configurable=false)|95,259,215|47629671|
|DefineProperty (getter & enumerable=false & configurable=false)|54,101,400|27050707|
|DefineProperty (writable)|94,828,761|47592816|
|DefineProperty (writable & enumerable=false)|96,090,114|48047340|
|DefineProperty (writable & enumerable=false & configurable=false)|94,863,264|47431665|
|DefineProperties (getter)|54,499,322|27250243|
|DefineProperties (getter & enumerable=false)|54,259,115|27129564|
|DefineProperties (getter & enumerable=false & configurable=false)|50,681,971|25369092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:47:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":47770006,"opsSec":95510741.39614879},{"name":"Getter","samples":27201772,"opsSec":54403530.94315257},{"name":"Method","samples":46716386,"opsSec":93432730.51586764},{"name":"DefineProperty (getter)","samples":47850418,"opsSec":95682587.60825652},{"name":"DefineProperty (getter & enumerable=false)","samples":27015995,"opsSec":54022814.22500388},{"name":"DefineProperty (getter & configurable=false)","samples":47629671,"opsSec":95259215.30524366},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27050707,"opsSec":54101400.69105543},{"name":"DefineProperty (writable)","samples":47592816,"opsSec":94828761.21599813},{"name":"DefineProperty (writable & enumerable=false)","samples":48047340,"opsSec":96090114.95081893},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47431665,"opsSec":94863264.54434747},{"name":"DefineProperties (getter)","samples":27250243,"opsSec":54499322.98444752},{"name":"DefineProperties (getter & enumerable=false)","samples":27129564,"opsSec":54259115.52040344},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25369092,"opsSec":50681971.20663952}]}-->
