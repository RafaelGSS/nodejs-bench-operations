## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|123,594,638|61797965|
|Setter|11,730,811|5865409|
|Method|88,609,632|44305139|
|DefineProperty (setter)|99,056,180|49528172|
|DefineProperty (setter & enumerable=false)|11,685,495|5843602|
|DefineProperty (setter & configurable=false)|11,687,567|5843913|
|DefineProperty (setter & enumerable=false & configurable=false)|11,713,884|5856950|
|DefineProperty (writable)|98,858,364|49429258|
|DefineProperty (writable & enumerable=false)|97,670,986|48835531|
|DefineProperty (writable & enumerable=false & configurable=false)|98,508,406|49427336|
|DefineProperties (setter)|90,495,432|45248341|
|DefineProperties (setter & enumerable=false)|11,558,377|5779218|
|DefineProperties (setter & enumerable=false & configurable=false)|11,655,702|5827858|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:03:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":123594638.18884166,"samples":61797965},{"name":"Setter","opsSec":11730811.477668818,"samples":5865409},{"name":"Method","opsSec":88609632.21300043,"samples":44305139},{"name":"DefineProperty (setter)","opsSec":99056180.75541411,"samples":49528172},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11685495.580546124,"samples":5843602},{"name":"DefineProperty (setter & configurable=false)","opsSec":11687567.84500144,"samples":5843913},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11713884.795377536,"samples":5856950},{"name":"DefineProperty (writable)","opsSec":98858364.15355265,"samples":49429258},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97670986.98868199,"samples":48835531},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98508406.28317487,"samples":49427336},{"name":"DefineProperties (setter)","opsSec":90495432.62005726,"samples":45248341},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11558377.029160397,"samples":5779218},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11655702.805744424,"samples":5827858}]}-->
