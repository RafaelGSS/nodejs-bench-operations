## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|820,682,699|96|
|Getter|85,109,016|94|
|Method|820,589,855|93|
|DefineProperty (getter)|820,324,274|97|
|DefineProperty (getter & enumerable=false)|84,049,815|93|
|DefineProperty (getter & configurable=false)|822,076,655|99|
|DefineProperty (getter & enumerable=false & configurable=false)|85,060,270|94|
|DefineProperty (writable)|821,749,447|95|
|DefineProperty (writable & enumerable=false)|824,096,634|97|
|DefineProperty (writable & enumerable=false & configurable=false)|822,392,728|97|
|DefineProperties (getter)|85,036,619|90|
|DefineProperties (getter & enumerable=false)|86,059,123|94|
|DefineProperties (getter & enumerable=false & configurable=false)|85,424,501|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Getter (class)","opsSec":820682699.2453617,"samples":6},{"name":"Getter","opsSec":85109015.53554134,"samples":5},{"name":"Method","opsSec":820589854.5376649,"samples":7},{"name":"DefineProperty (getter)","opsSec":820324273.9391966,"samples":5},{"name":"DefineProperty (getter & enumerable=false)","opsSec":84049814.54814915,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":822076655.0939614,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":85060269.59595576,"samples":6},{"name":"DefineProperty (writable)","opsSec":821749447.1338984,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":824096634.497673,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":822392728.0562522,"samples":6},{"name":"DefineProperties (getter)","opsSec":85036618.61480096,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":86059123.35724133,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":85424501.29568031,"samples":5}]}-->
