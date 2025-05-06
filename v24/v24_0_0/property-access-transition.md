## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,577,848|3788925|
|Adding property in the object creation - small object|7,530,002|3765003|
|Adding property after the function creation - small class|280,230|140119|
|Adding property in the function creation - small class|288,720|144364|
|Adding property after the class creation - small class|280,106|143284|
|Adding property in the class creation - small class|290,343|145173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:22:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3788925,"opsSec":7577848.226783515},{"name":"Adding property in the object creation - small object","samples":3765003,"opsSec":7530002.777158811},{"name":"Adding property after the function creation - small class","samples":140119,"opsSec":280230.7700461328},{"name":"Adding property in the function creation - small class","samples":144364,"opsSec":288720.0844501647},{"name":"Adding property after the class creation - small class","samples":143284,"opsSec":280106.6143436071},{"name":"Adding property in the class creation - small class","samples":145173,"opsSec":290343.30329139903}]}-->
