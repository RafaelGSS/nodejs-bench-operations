## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,605,085|7302543|
|Setter|5,935,290|2967646|
|Method|13,108,479|6554240|
|DefineProperty (setter)|14,348,399|7174200|
|DefineProperty (setter & enumerable=false)|5,949,132|2974567|
|DefineProperty (setter & configurable=false)|5,855,515|2927758|
|DefineProperty (setter & enumerable=false & configurable=false)|5,940,059|2970030|
|DefineProperty (writable)|14,456,461|7228231|
|DefineProperty (writable & enumerable=false)|13,658,107|6829054|
|DefineProperty (writable & enumerable=false & configurable=false)|13,661,879|6830940|
|DefineProperties (setter)|14,309,572|7154787|
|DefineProperties (setter & enumerable=false)|5,907,941|2953971|
|DefineProperties (setter & enumerable=false & configurable=false)|6,021,235|3010618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:36:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14605085.474376144,"samples":7302543},{"name":"Setter","opsSec":5935290.646805269,"samples":2967646},{"name":"Method","opsSec":13108479.18729767,"samples":6554240},{"name":"DefineProperty (setter)","opsSec":14348399.91359951,"samples":7174200},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5949132.405605485,"samples":2974567},{"name":"DefineProperty (setter & configurable=false)","opsSec":5855515.730669873,"samples":2927758},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5940059.952508203,"samples":2970030},{"name":"DefineProperty (writable)","opsSec":14456461.363748873,"samples":7228231},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13658107.8907669,"samples":6829054},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13661879.426609814,"samples":6830940},{"name":"DefineProperties (setter)","opsSec":14309572.369119039,"samples":7154787},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5907941.054626633,"samples":2953971},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6021235.927836445,"samples":3010618}]}-->
