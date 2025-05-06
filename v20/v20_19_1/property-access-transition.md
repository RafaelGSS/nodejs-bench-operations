## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,554,915|3779356|
|Adding property in the object creation - small object|7,554,664|3777639|
|Adding property after the function creation - small class|241,550|120776|
|Adding property in the function creation - small class|245,642|122932|
|Adding property after the class creation - small class|239,582|122207|
|Adding property in the class creation - small class|234,075|117042|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:20:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3779356,"opsSec":7554915.307531861},{"name":"Adding property in the object creation - small object","samples":3777639,"opsSec":7554664.772751066},{"name":"Adding property after the function creation - small class","samples":120776,"opsSec":241550.25649024866},{"name":"Adding property in the function creation - small class","samples":122932,"opsSec":245642.4158024013},{"name":"Adding property after the class creation - small class","samples":122207,"opsSec":239582.15783225652},{"name":"Adding property in the class creation - small class","samples":117042,"opsSec":234075.99460098465}]}-->
