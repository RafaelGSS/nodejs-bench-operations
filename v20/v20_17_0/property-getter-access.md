## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|145,816,791|72908412|
|Getter|51,651,057|25852911|
|Method|95,072,704|47563327|
|DefineProperty (getter)|99,881,043|49940527|
|DefineProperty (getter & enumerable=false)|52,100,686|26055126|
|DefineProperty (getter & configurable=false)|98,347,037|49189821|
|DefineProperty (getter & enumerable=false & configurable=false)|52,187,050|26093532|
|DefineProperty (writable)|96,199,928|48099976|
|DefineProperty (writable & enumerable=false)|96,364,022|48182022|
|DefineProperty (writable & enumerable=false & configurable=false)|98,264,172|49156211|
|DefineProperties (getter)|45,535,505|22768925|
|DefineProperties (getter & enumerable=false)|51,651,290|25825648|
|DefineProperties (getter & enumerable=false & configurable=false)|52,317,985|26165572|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:27:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":145816791.9203058,"samples":72908412},{"name":"Getter","opsSec":51651057.93280558,"samples":25852911},{"name":"Method","opsSec":95072704.80351382,"samples":47563327},{"name":"DefineProperty (getter)","opsSec":99881043.61237147,"samples":49940527},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52100686.730721734,"samples":26055126},{"name":"DefineProperty (getter & configurable=false)","opsSec":98347037.79333667,"samples":49189821},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52187050.53574096,"samples":26093532},{"name":"DefineProperty (writable)","opsSec":96199928.91201705,"samples":48099976},{"name":"DefineProperty (writable & enumerable=false)","opsSec":96364022.22173098,"samples":48182022},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98264172.91540012,"samples":49156211},{"name":"DefineProperties (getter)","opsSec":45535505.92322608,"samples":22768925},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51651290.628265776,"samples":25825648},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52317985.398856364,"samples":26165572}]}-->
