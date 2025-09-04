## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,433,048|47716527|
|Getter|52,426,831|26221342|
|Method|94,353,761|47176910|
|DefineProperty (getter)|95,479,053|47748710|
|DefineProperty (getter & enumerable=false)|53,761,662|26885008|
|DefineProperty (getter & configurable=false)|94,925,754|47462899|
|DefineProperty (getter & enumerable=false & configurable=false)|53,417,734|26716134|
|DefineProperty (writable)|94,429,802|47250176|
|DefineProperty (writable & enumerable=false)|94,947,616|47473833|
|DefineProperty (writable & enumerable=false & configurable=false)|94,418,487|47573056|
|DefineProperties (getter)|53,618,241|26809127|
|DefineProperties (getter & enumerable=false)|53,869,794|26934927|
|DefineProperties (getter & enumerable=false & configurable=false)|54,186,130|27093071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:51:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47716527,"opsSec":95433048.65574928},{"name":"Getter","samples":26221342,"opsSec":52426831.279611334},{"name":"Method","samples":47176910,"opsSec":94353761.31196047},{"name":"DefineProperty (getter)","samples":47748710,"opsSec":95479053.84016141},{"name":"DefineProperty (getter & enumerable=false)","samples":26885008,"opsSec":53761662.727892},{"name":"DefineProperty (getter & configurable=false)","samples":47462899,"opsSec":94925754.71385585},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26716134,"opsSec":53417734.209711686},{"name":"DefineProperty (writable)","samples":47250176,"opsSec":94429802.17277949},{"name":"DefineProperty (writable & enumerable=false)","samples":47473833,"opsSec":94947616.81713448},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47573056,"opsSec":94418487.63294914},{"name":"DefineProperties (getter)","samples":26809127,"opsSec":53618241.88227733},{"name":"DefineProperties (getter & enumerable=false)","samples":26934927,"opsSec":53869794.850965254},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":27093071,"opsSec":54186130.29579585}]}-->
