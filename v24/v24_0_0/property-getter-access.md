## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,360,238|47737898|
|Getter|53,571,230|26785624|
|Method|93,892,819|47077719|
|DefineProperty (getter)|94,670,273|47335146|
|DefineProperty (getter & enumerable=false)|53,519,729|26759881|
|DefineProperty (getter & configurable=false)|95,395,990|47698879|
|DefineProperty (getter & enumerable=false & configurable=false)|53,765,928|26895507|
|DefineProperty (writable)|95,063,917|47531984|
|DefineProperty (writable & enumerable=false)|95,903,472|47951744|
|DefineProperty (writable & enumerable=false & configurable=false)|95,902,276|47951150|
|DefineProperties (getter)|52,737,612|26463464|
|DefineProperties (getter & enumerable=false)|53,683,614|26844360|
|DefineProperties (getter & enumerable=false & configurable=false)|53,412,869|26706443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:15:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47737898,"opsSec":95360238.84400979},{"name":"Getter","samples":26785624,"opsSec":53571230.96434855},{"name":"Method","samples":47077719,"opsSec":93892819.59580489},{"name":"DefineProperty (getter)","samples":47335146,"opsSec":94670273.2552859},{"name":"DefineProperty (getter & enumerable=false)","samples":26759881,"opsSec":53519729.2459257},{"name":"DefineProperty (getter & configurable=false)","samples":47698879,"opsSec":95395990.50308795},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26895507,"opsSec":53765928.43077206},{"name":"DefineProperty (writable)","samples":47531984,"opsSec":95063917.2358682},{"name":"DefineProperty (writable & enumerable=false)","samples":47951744,"opsSec":95903472.08002363},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47951150,"opsSec":95902276.21623549},{"name":"DefineProperties (getter)","samples":26463464,"opsSec":52737612.52259566},{"name":"DefineProperties (getter & enumerable=false)","samples":26844360,"opsSec":53683614.25881507},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26706443,"opsSec":53412869.01470765}]}-->
