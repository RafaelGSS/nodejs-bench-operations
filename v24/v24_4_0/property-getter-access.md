## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|92,276,077|46140801|
|Getter|52,689,064|26368424|
|Method|95,522,838|47761445|
|DefineProperty (getter)|94,489,536|47252783|
|DefineProperty (getter & enumerable=false)|52,925,950|26662803|
|DefineProperty (getter & configurable=false)|92,767,527|46391465|
|DefineProperty (getter & enumerable=false & configurable=false)|53,292,264|26653713|
|DefineProperty (writable)|95,443,692|47723888|
|DefineProperty (writable & enumerable=false)|95,288,438|47649845|
|DefineProperty (writable & enumerable=false & configurable=false)|94,202,916|47116203|
|DefineProperties (getter)|53,901,566|26950917|
|DefineProperties (getter & enumerable=false)|52,986,958|26533968|
|DefineProperties (getter & enumerable=false & configurable=false)|53,763,457|26881735|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:35:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":46140801,"opsSec":92276077.8003264},{"name":"Getter","samples":26368424,"opsSec":52689064.603445515},{"name":"Method","samples":47761445,"opsSec":95522838.41766725},{"name":"DefineProperty (getter)","samples":47252783,"opsSec":94489536.98392512},{"name":"DefineProperty (getter & enumerable=false)","samples":26662803,"opsSec":52925950.0838006},{"name":"DefineProperty (getter & configurable=false)","samples":46391465,"opsSec":92767527.43634963},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26653713,"opsSec":53292264.45734641},{"name":"DefineProperty (writable)","samples":47723888,"opsSec":95443692.15530005},{"name":"DefineProperty (writable & enumerable=false)","samples":47649845,"opsSec":95288438.9128638},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47116203,"opsSec":94202916.34225655},{"name":"DefineProperties (getter)","samples":26950917,"opsSec":53901566.10921644},{"name":"DefineProperties (getter & enumerable=false)","samples":26533968,"opsSec":52986958.46877227},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26881735,"opsSec":53763457.41935096}]}-->
