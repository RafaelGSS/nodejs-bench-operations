## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,817,625|2408813|
|Adding property in the object creation - small object|4,783,101|2391551|
|Adding property after the function creation - small class|241,618|120810|
|Adding property in the function creation - small class|242,307|121154|
|Adding property after the class creation - small class|234,362|117182|
|Adding property in the class creation - small class|230,224|117031|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:12:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4817625.903653943,"samples":2408813},{"name":"Adding property in the object creation - small object","opsSec":4783101.158158354,"samples":2391551},{"name":"Adding property after the function creation - small class","opsSec":241618.6169749005,"samples":120810},{"name":"Adding property in the function creation - small class","opsSec":242307.1335095876,"samples":121154},{"name":"Adding property after the class creation - small class","opsSec":234362.69506842337,"samples":117182},{"name":"Adding property in the class creation - small class","opsSec":230224.22298212312,"samples":117031}]}-->
