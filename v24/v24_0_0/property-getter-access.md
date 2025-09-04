## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|93,962,125|46981077|
|Getter|52,066,956|26033556|
|Method|97,339,006|48669580|
|DefineProperty (getter)|92,035,580|46017915|
|DefineProperty (getter & enumerable=false)|53,133,332|26567155|
|DefineProperty (getter & configurable=false)|89,695,762|44848067|
|DefineProperty (getter & enumerable=false & configurable=false)|53,321,804|26675106|
|DefineProperty (writable)|88,280,786|44153227|
|DefineProperty (writable & enumerable=false)|95,043,094|47521573|
|DefineProperty (writable & enumerable=false & configurable=false)|95,150,979|47579517|
|DefineProperties (getter)|53,267,785|26633896|
|DefineProperties (getter & enumerable=false)|52,624,203|26312181|
|DefineProperties (getter & enumerable=false & configurable=false)|49,914,467|25027437|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:52:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":46981077,"opsSec":93962125.99928646},{"name":"Getter","samples":26033556,"opsSec":52066956.215667},{"name":"Method","samples":48669580,"opsSec":97339006.98308103},{"name":"DefineProperty (getter)","samples":46017915,"opsSec":92035580.03136463},{"name":"DefineProperty (getter & enumerable=false)","samples":26567155,"opsSec":53133332.0278907},{"name":"DefineProperty (getter & configurable=false)","samples":44848067,"opsSec":89695762.30076103},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26675106,"opsSec":53321804.91507511},{"name":"DefineProperty (writable)","samples":44153227,"opsSec":88280786.71438594},{"name":"DefineProperty (writable & enumerable=false)","samples":47521573,"opsSec":95043094.86681496},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47579517,"opsSec":95150979.27930205},{"name":"DefineProperties (getter)","samples":26633896,"opsSec":53267785.71440128},{"name":"DefineProperties (getter & enumerable=false)","samples":26312181,"opsSec":52624203.916891426},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25027437,"opsSec":49914467.1993206}]}-->
