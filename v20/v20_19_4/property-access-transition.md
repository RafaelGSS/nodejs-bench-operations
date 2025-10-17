## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,580,070|3790036|
|Adding property in the object creation - small object|7,647,920|3823961|
|Adding property after the function creation - small class|235,547|118676|
|Adding property in the function creation - small class|246,762|123764|
|Adding property after the class creation - small class|237,637|119499|
|Adding property in the class creation - small class|232,072|117678|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:44:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3790036,"opsSec":7580070.6204271475},{"name":"Adding property in the object creation - small object","samples":3823961,"opsSec":7647920.240978345},{"name":"Adding property after the function creation - small class","samples":118676,"opsSec":235547.1767604895},{"name":"Adding property in the function creation - small class","samples":123764,"opsSec":246762.07913077925},{"name":"Adding property after the class creation - small class","samples":119499,"opsSec":237637.49019826637},{"name":"Adding property in the class creation - small class","samples":117678,"opsSec":232072.64961348215}]}-->
