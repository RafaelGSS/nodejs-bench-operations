## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|86,609,551|43572828|
|Getter|52,407,084|26209954|
|Method|95,371,576|47686644|
|DefineProperty (getter)|95,104,989|47554359|
|DefineProperty (getter & enumerable=false)|53,396,123|26698073|
|DefineProperty (getter & configurable=false)|94,642,376|47321193|
|DefineProperty (getter & enumerable=false & configurable=false)|53,902,536|26953099|
|DefineProperty (writable)|96,042,673|48021437|
|DefineProperty (writable & enumerable=false)|93,318,254|46811880|
|DefineProperty (writable & enumerable=false & configurable=false)|94,907,783|47459619|
|DefineProperties (getter)|53,483,654|26742312|
|DefineProperties (getter & enumerable=false)|53,736,811|26871334|
|DefineProperties (getter & enumerable=false & configurable=false)|53,699,674|26862936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:15:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":43572828,"opsSec":86609551.02048102},{"name":"Getter","samples":26209954,"opsSec":52407084.824856706},{"name":"Method","samples":47686644,"opsSec":95371576.2709491},{"name":"DefineProperty (getter)","samples":47554359,"opsSec":95104989.5039915},{"name":"DefineProperty (getter & enumerable=false)","samples":26698073,"opsSec":53396123.3600437},{"name":"DefineProperty (getter & configurable=false)","samples":47321193,"opsSec":94642376.15719289},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26953099,"opsSec":53902536.1851068},{"name":"DefineProperty (writable)","samples":48021437,"opsSec":96042673.65498275},{"name":"DefineProperty (writable & enumerable=false)","samples":46811880,"opsSec":93318254.88379794},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47459619,"opsSec":94907783.3898071},{"name":"DefineProperties (getter)","samples":26742312,"opsSec":53483654.23438143},{"name":"DefineProperties (getter & enumerable=false)","samples":26871334,"opsSec":53736811.117482685},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26862936,"opsSec":53699674.50639271}]}-->
