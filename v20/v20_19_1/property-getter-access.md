## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|99,780,596|49890305|
|Getter|53,978,315|26989423|
|Method|101,040,779|50520394|
|DefineProperty (getter)|103,508,260|51770592|
|DefineProperty (getter & enumerable=false)|54,158,850|27081340|
|DefineProperty (getter & configurable=false)|103,659,177|51838145|
|DefineProperty (getter & enumerable=false & configurable=false)|53,994,205|27000125|
|DefineProperty (writable)|101,194,538|50634100|
|DefineProperty (writable & enumerable=false)|102,181,050|51090528|
|DefineProperty (writable & enumerable=false & configurable=false)|101,528,108|50764185|
|DefineProperties (getter)|53,865,025|26948517|
|DefineProperties (getter & enumerable=false)|53,546,217|26782992|
|DefineProperties (getter & enumerable=false & configurable=false)|53,654,059|26827631|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:26:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":49890305,"opsSec":99780596.4298389},{"name":"Getter","samples":26989423,"opsSec":53978315.824981965},{"name":"Method","samples":50520394,"opsSec":101040779.71465607},{"name":"DefineProperty (getter)","samples":51770592,"opsSec":103508260.29958043},{"name":"DefineProperty (getter & enumerable=false)","samples":27081340,"opsSec":54158850.860926434},{"name":"DefineProperty (getter & configurable=false)","samples":51838145,"opsSec":103659177.94290519},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27000125,"opsSec":53994205.78061651},{"name":"DefineProperty (writable)","samples":50634100,"opsSec":101194538.67379765},{"name":"DefineProperty (writable & enumerable=false)","samples":51090528,"opsSec":102181050.68658535},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50764185,"opsSec":101528108.26053691},{"name":"DefineProperties (getter)","samples":26948517,"opsSec":53865025.139730915},{"name":"DefineProperties (getter & enumerable=false)","samples":26782992,"opsSec":53546217.520894594},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26827631,"opsSec":53654059.07599551}]}-->
