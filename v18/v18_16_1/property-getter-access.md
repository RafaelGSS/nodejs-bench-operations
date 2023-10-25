## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|568,214,721|94|
|Getter|43,139,298|96|
|Method|587,869,434|98|
|DefineProperty (getter)|587,242,367|96|
|DefineProperty (getter & enumerable=false)|43,964,895|94|
|DefineProperty (getter & configurable=false)|588,474,767|96|
|DefineProperty (getter & enumerable=false & configurable=false)|44,009,991|95|
|DefineProperty (writable)|587,293,756|92|
|DefineProperty (writable & enumerable=false)|565,585,642|91|
|DefineProperty (writable & enumerable=false & configurable=false)|213,909,780|40|
|DefineProperties (getter)|27,717,463|92|
|DefineProperties (getter & enumerable=false)|43,823,299|95|
|DefineProperties (getter & enumerable=false & configurable=false)|43,620,044|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":568214720.8115177,"samples":6},{"name":"Getter","opsSec":43139298.38702793,"samples":7},{"name":"Method","opsSec":587869433.7803354,"samples":8},{"name":"DefineProperty (getter)","opsSec":587242366.7580006,"samples":11},{"name":"DefineProperty (getter & enumerable=false)","opsSec":43964894.85569145,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":588474766.6695818,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":44009990.64854625,"samples":7},{"name":"DefineProperty (writable)","opsSec":587293755.9035716,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":565585642.4451222,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":213909779.94864962,"samples":9},{"name":"DefineProperties (getter)","opsSec":27717463.379753303,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":43823299.267246015,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":43620043.61490927,"samples":6}]}-->
