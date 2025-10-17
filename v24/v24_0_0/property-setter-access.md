## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|85,009,480|42508640|
|Setter|10,591,803|5296617|
|Method|80,015,777|40007907|
|DefineProperty (setter)|84,714,355|42367488|
|DefineProperty (setter & enumerable=false)|10,747,787|5376256|
|DefineProperty (setter & configurable=false)|10,821,818|5411244|
|DefineProperty (setter & enumerable=false & configurable=false)|10,670,975|5335491|
|DefineProperty (writable)|83,657,334|41828674|
|DefineProperty (writable & enumerable=false)|85,937,486|42976152|
|DefineProperty (writable & enumerable=false & configurable=false)|85,990,127|43003811|
|DefineProperties (setter)|80,165,047|40398523|
|DefineProperties (setter & enumerable=false)|10,543,371|5272858|
|DefineProperties (setter & enumerable=false & configurable=false)|10,700,220|5350114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:49:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":42508640,"opsSec":85009480.38017513},{"name":"Setter","samples":5296617,"opsSec":10591803.704011418},{"name":"Method","samples":40007907,"opsSec":80015777.67283693},{"name":"DefineProperty (setter)","samples":42367488,"opsSec":84714355.67868425},{"name":"DefineProperty (setter & enumerable=false)","samples":5376256,"opsSec":10747787.40163169},{"name":"DefineProperty (setter & configurable=false)","samples":5411244,"opsSec":10821818.583946034},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5335491,"opsSec":10670975.746808212},{"name":"DefineProperty (writable)","samples":41828674,"opsSec":83657334.94945574},{"name":"DefineProperty (writable & enumerable=false)","samples":42976152,"opsSec":85937486.65855034},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":43003811,"opsSec":85990127.48054434},{"name":"DefineProperties (setter)","samples":40398523,"opsSec":80165047.69120616},{"name":"DefineProperties (setter & enumerable=false)","samples":5272858,"opsSec":10543371.512650218},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5350114,"opsSec":10700220.360042663}]}-->
