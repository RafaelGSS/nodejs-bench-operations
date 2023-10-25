## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|588,583,583|98|
|Setter|9,191,028|97|
|Method|589,819,628|99|
|DefineProperty (setter)|590,079,231|96|
|DefineProperty (setter & enumerable=false)|9,118,954|96|
|DefineProperty (setter & configurable=false)|9,136,167|98|
|DefineProperty (setter & enumerable=false & configurable=false)|9,093,547|98|
|DefineProperty (writable)|591,955,307|97|
|DefineProperty (writable & enumerable=false)|490,987,720|84|
|DefineProperty (writable & enumerable=false & configurable=false)|83,215,810|82|
|DefineProperties (setter)|81,793,770|86|
|DefineProperties (setter & enumerable=false)|9,207,862|100|
|DefineProperties (setter & enumerable=false & configurable=false)|9,060,565|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":588583582.6824358,"samples":5},{"name":"Setter","opsSec":9191027.635076981,"samples":5},{"name":"Method","opsSec":589819627.5497978,"samples":6},{"name":"DefineProperty (setter)","opsSec":590079230.8764385,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9118954.46546731,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":9136167.059435714,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9093546.90865357,"samples":5},{"name":"DefineProperty (writable)","opsSec":591955307.1771848,"samples":10},{"name":"DefineProperty (writable & enumerable=false)","opsSec":490987720.3791294,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":83215810.3262072,"samples":5},{"name":"DefineProperties (setter)","opsSec":81793769.55052915,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9207861.748307897,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9060565.284511006,"samples":4}]}-->
