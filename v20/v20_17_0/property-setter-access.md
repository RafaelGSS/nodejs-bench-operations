## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,213,919|9606960|
|Setter|6,459,425|3229713|
|Method|18,872,498|9436250|
|DefineProperty (setter)|18,764,971|9382486|
|DefineProperty (setter & enumerable=false)|6,196,785|3098393|
|DefineProperty (setter & configurable=false)|6,153,645|3076823|
|DefineProperty (setter & enumerable=false & configurable=false)|6,130,168|3065085|
|DefineProperty (writable)|17,569,401|8784701|
|DefineProperty (writable & enumerable=false)|17,397,735|8698868|
|DefineProperty (writable & enumerable=false & configurable=false)|17,259,976|8629989|
|DefineProperties (setter)|17,298,605|8649303|
|DefineProperties (setter & enumerable=false)|6,170,833|3085417|
|DefineProperties (setter & enumerable=false & configurable=false)|6,237,923|3118962|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:49:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":19213919.768098358,"samples":9606960},{"name":"Setter","opsSec":6459425.741595435,"samples":3229713},{"name":"Method","opsSec":18872498.565458383,"samples":9436250},{"name":"DefineProperty (setter)","opsSec":18764971.023493182,"samples":9382486},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6196785.9256462995,"samples":3098393},{"name":"DefineProperty (setter & configurable=false)","opsSec":6153645.26161533,"samples":3076823},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6130168.124215554,"samples":3065085},{"name":"DefineProperty (writable)","opsSec":17569401.718931917,"samples":8784701},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17397735.9993053,"samples":8698868},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17259976.239501167,"samples":8629989},{"name":"DefineProperties (setter)","opsSec":17298605.791921765,"samples":8649303},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6170833.7410135595,"samples":3085417},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6237923.138945645,"samples":3118962}]}-->
