## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|100,197,340|50187540|
|Setter|11,378,765|5694367|
|Method|96,707,627|48353840|
|DefineProperty (setter)|100,550,561|50277501|
|DefineProperty (setter & enumerable=false)|11,455,586|5730020|
|DefineProperty (setter & configurable=false)|11,442,527|5721266|
|DefineProperty (setter & enumerable=false & configurable=false)|11,652,939|5826472|
|DefineProperty (writable)|98,734,624|49374050|
|DefineProperty (writable & enumerable=false)|100,740,597|50375289|
|DefineProperty (writable & enumerable=false & configurable=false)|101,021,411|50520677|
|DefineProperties (setter)|99,942,593|49987999|
|DefineProperties (setter & enumerable=false)|11,295,885|5655360|
|DefineProperties (setter & enumerable=false & configurable=false)|11,668,166|5834601|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:01:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":50187540,"opsSec":100197340.53880225},{"name":"Setter","samples":5694367,"opsSec":11378765.746055825},{"name":"Method","samples":48353840,"opsSec":96707627.0042204},{"name":"DefineProperty (setter)","samples":50277501,"opsSec":100550561.28501141},{"name":"DefineProperty (setter & enumerable=false)","samples":5730020,"opsSec":11455586.549084352},{"name":"DefineProperty (setter & configurable=false)","samples":5721266,"opsSec":11442527.19413858},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5826472,"opsSec":11652939.059153838},{"name":"DefineProperty (writable)","samples":49374050,"opsSec":98734624.50097886},{"name":"DefineProperty (writable & enumerable=false)","samples":50375289,"opsSec":100740597.83045414},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50520677,"opsSec":101021411.76718868},{"name":"DefineProperties (setter)","samples":49987999,"opsSec":99942593.58728975},{"name":"DefineProperties (setter & enumerable=false)","samples":5655360,"opsSec":11295885.362263218},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5834601,"opsSec":11668166.823575746}]}-->
