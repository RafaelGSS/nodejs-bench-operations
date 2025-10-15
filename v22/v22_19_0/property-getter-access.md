## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|99,046,489|49523250|
|Getter|50,223,632|25111840|
|Method|101,832,562|50916960|
|DefineProperty (getter)|98,624,343|49320395|
|DefineProperty (getter & enumerable=false)|50,477,570|25246515|
|DefineProperty (getter & configurable=false)|97,711,142|48868707|
|DefineProperty (getter & enumerable=false & configurable=false)|50,549,473|25274764|
|DefineProperty (writable)|95,805,365|47913449|
|DefineProperty (writable & enumerable=false)|97,577,791|48803966|
|DefineProperty (writable & enumerable=false & configurable=false)|96,638,690|48322977|
|DefineProperties (getter)|49,570,397|24833914|
|DefineProperties (getter & enumerable=false)|50,605,139|25327859|
|DefineProperties (getter & enumerable=false & configurable=false)|49,595,566|24798513|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:16:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":49523250,"opsSec":99046489.69916508},{"name":"Getter","samples":25111840,"opsSec":50223632.890232354},{"name":"Method","samples":50916960,"opsSec":101832562.16461611},{"name":"DefineProperty (getter)","samples":49320395,"opsSec":98624343.60170966},{"name":"DefineProperty (getter & enumerable=false)","samples":25246515,"opsSec":50477570.032715805},{"name":"DefineProperty (getter & configurable=false)","samples":48868707,"opsSec":97711142.40514153},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25274764,"opsSec":50549473.709865235},{"name":"DefineProperty (writable)","samples":47913449,"opsSec":95805365.74404901},{"name":"DefineProperty (writable & enumerable=false)","samples":48803966,"opsSec":97577791.39117277},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48322977,"opsSec":96638690.6360118},{"name":"DefineProperties (getter)","samples":24833914,"opsSec":49570397.97761977},{"name":"DefineProperties (getter & enumerable=false)","samples":25327859,"opsSec":50605139.88326144},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24798513,"opsSec":49595566.700045414}]}-->
