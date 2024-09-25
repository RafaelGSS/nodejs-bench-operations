## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|13,865,466|6932734|
|Getter|12,020,660|6010331|
|Method|13,989,304|6994653|
|DefineProperty (getter)|14,012,324|7006163|
|DefineProperty (getter & enumerable=false)|11,872,445|5936223|
|DefineProperty (getter & configurable=false)|13,558,597|6779299|
|DefineProperty (getter & enumerable=false & configurable=false)|12,047,403|6023702|
|DefineProperty (writable)|14,037,702|7018852|
|DefineProperty (writable & enumerable=false)|12,919,662|6459874|
|DefineProperty (writable & enumerable=false & configurable=false)|13,092,252|6546127|
|DefineProperties (getter)|11,870,848|5935425|
|DefineProperties (getter & enumerable=false)|11,988,136|5994069|
|DefineProperties (getter & enumerable=false & configurable=false)|12,299,803|6149902|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:13:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":13865466.558083603,"samples":6932734},{"name":"Getter","opsSec":12020660.31683533,"samples":6010331},{"name":"Method","opsSec":13989304.181305358,"samples":6994653},{"name":"DefineProperty (getter)","opsSec":14012324.458419694,"samples":7006163},{"name":"DefineProperty (getter & enumerable=false)","opsSec":11872445.738823554,"samples":5936223},{"name":"DefineProperty (getter & configurable=false)","opsSec":13558597.810167138,"samples":6779299},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12047403.494353373,"samples":6023702},{"name":"DefineProperty (writable)","opsSec":14037702.34383471,"samples":7018852},{"name":"DefineProperty (writable & enumerable=false)","opsSec":12919662.756003376,"samples":6459874},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13092252.84814656,"samples":6546127},{"name":"DefineProperties (getter)","opsSec":11870848.527734438,"samples":5935425},{"name":"DefineProperties (getter & enumerable=false)","opsSec":11988136.465482775,"samples":5994069},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12299803.13857408,"samples":6149902}]}-->
