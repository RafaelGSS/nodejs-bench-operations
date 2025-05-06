## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,058,332|4029793|
|Adding property in the object creation - small object|8,310,938|4155644|
|Adding property after the function creation - small class|238,283|119142|
|Adding property in the function creation - small class|271,985|136168|
|Adding property after the class creation - small class|267,270|133712|
|Adding property in the class creation - small class|269,929|134965|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:23:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4029793,"opsSec":8058332.494147206},{"name":"Adding property in the object creation - small object","samples":4155644,"opsSec":8310938.192611473},{"name":"Adding property after the function creation - small class","samples":119142,"opsSec":238283.64543393557},{"name":"Adding property in the function creation - small class","samples":136168,"opsSec":271985.6058397376},{"name":"Adding property after the class creation - small class","samples":133712,"opsSec":267270.20791150397},{"name":"Adding property in the class creation - small class","samples":134965,"opsSec":269929.4401663411}]}-->
