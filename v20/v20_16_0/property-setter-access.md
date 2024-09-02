## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,103,799|9551900|
|Setter|6,155,525|3077763|
|Method|18,950,353|9475177|
|DefineProperty (setter)|18,801,731|9400866|
|DefineProperty (setter & enumerable=false)|6,241,571|3120786|
|DefineProperty (setter & configurable=false)|6,218,919|3109460|
|DefineProperty (setter & enumerable=false & configurable=false)|6,276,731|3138366|
|DefineProperty (writable)|19,197,669|9598835|
|DefineProperty (writable & enumerable=false)|18,790,173|9395087|
|DefineProperty (writable & enumerable=false & configurable=false)|19,356,975|9678488|
|DefineProperties (setter)|18,861,699|9430850|
|DefineProperties (setter & enumerable=false)|6,133,159|3066580|
|DefineProperties (setter & enumerable=false & configurable=false)|6,174,493|3087248|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:48:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":19103799.388127502,"samples":9551900},{"name":"Setter","opsSec":6155525.692247617,"samples":3077763},{"name":"Method","opsSec":18950353.92432679,"samples":9475177},{"name":"DefineProperty (setter)","opsSec":18801731.474167492,"samples":9400866},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6241571.862650313,"samples":3120786},{"name":"DefineProperty (setter & configurable=false)","opsSec":6218919.664221391,"samples":3109460},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6276731.096165304,"samples":3138366},{"name":"DefineProperty (writable)","opsSec":19197669.07922898,"samples":9598835},{"name":"DefineProperty (writable & enumerable=false)","opsSec":18790173.623810314,"samples":9395087},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19356975.651074897,"samples":9678488},{"name":"DefineProperties (setter)","opsSec":18861699.548495453,"samples":9430850},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6133159.914265053,"samples":3066580},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6174493.727937926,"samples":3087248}]}-->
