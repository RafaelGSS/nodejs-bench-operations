## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|91,570,718|45786611|
|Setter|11,137,548|5568778|
|Method|93,754,584|46877362|
|DefineProperty (setter)|95,396,888|47698486|
|DefineProperty (setter & enumerable=false)|11,071,932|5536047|
|DefineProperty (setter & configurable=false)|10,989,075|5494540|
|DefineProperty (setter & enumerable=false & configurable=false)|11,176,531|5588269|
|DefineProperty (writable)|95,422,763|47723719|
|DefineProperty (writable & enumerable=false)|96,669,088|48344348|
|DefineProperty (writable & enumerable=false & configurable=false)|94,959,698|47479858|
|DefineProperties (setter)|91,783,461|45891742|
|DefineProperties (setter & enumerable=false)|11,231,168|5615587|
|DefineProperties (setter & enumerable=false & configurable=false)|10,835,706|5418070|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:52:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":45786611,"opsSec":91570718.45655741},{"name":"Setter","samples":5568778,"opsSec":11137548.582392644},{"name":"Method","samples":46877362,"opsSec":93754584.30566938},{"name":"DefineProperty (setter)","samples":47698486,"opsSec":95396888.81391296},{"name":"DefineProperty (setter & enumerable=false)","samples":5536047,"opsSec":11071932.726227911},{"name":"DefineProperty (setter & configurable=false)","samples":5494540,"opsSec":10989075.7801949},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5588269,"opsSec":11176531.674083073},{"name":"DefineProperty (writable)","samples":47723719,"opsSec":95422763.9633854},{"name":"DefineProperty (writable & enumerable=false)","samples":48344348,"opsSec":96669088.80205646},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47479858,"opsSec":94959698.52741548},{"name":"DefineProperties (setter)","samples":45891742,"opsSec":91783461.23770161},{"name":"DefineProperties (setter & enumerable=false)","samples":5615587,"opsSec":11231168.047480933},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5418070,"opsSec":10835706.918465883}]}-->
