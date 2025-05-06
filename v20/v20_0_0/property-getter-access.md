## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|89,922,822|44961414|
|Getter|53,533,093|26773457|
|Method|101,090,086|50545051|
|DefineProperty (getter)|100,988,715|50494408|
|DefineProperty (getter & enumerable=false)|53,610,719|26805620|
|DefineProperty (getter & configurable=false)|99,213,937|49629046|
|DefineProperty (getter & enumerable=false & configurable=false)|51,581,513|25805921|
|DefineProperty (writable)|98,308,287|49169887|
|DefineProperty (writable & enumerable=false)|101,538,396|50769210|
|DefineProperty (writable & enumerable=false & configurable=false)|99,397,833|49704388|
|DefineProperties (getter)|50,521,924|25260967|
|DefineProperties (getter & enumerable=false)|50,811,274|25405640|
|DefineProperties (getter & enumerable=false & configurable=false)|50,611,284|25305646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:27:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":44961414,"opsSec":89922822.424785},{"name":"Getter","samples":26773457,"opsSec":53533093.89647968},{"name":"Method","samples":50545051,"opsSec":101090086.0277664},{"name":"DefineProperty (getter)","samples":50494408,"opsSec":100988715.01128499},{"name":"DefineProperty (getter & enumerable=false)","samples":26805620,"opsSec":53610719.33269384},{"name":"DefineProperty (getter & configurable=false)","samples":49629046,"opsSec":99213937.82910854},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25805921,"opsSec":51581513.51433595},{"name":"DefineProperty (writable)","samples":49169887,"opsSec":98308287.23191564},{"name":"DefineProperty (writable & enumerable=false)","samples":50769210,"opsSec":101538396.03693853},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49704388,"opsSec":99397833.69008039},{"name":"DefineProperties (getter)","samples":25260967,"opsSec":50521924.805009685},{"name":"DefineProperties (getter & enumerable=false)","samples":25405640,"opsSec":50811274.00426967},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25305646,"opsSec":50611284.61075244}]}-->
