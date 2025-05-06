## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,730,512|3867338|
|Adding property in the object creation - small object|7,822,166|3912180|
|Adding property after the function creation - small class|265,480|132753|
|Adding property in the function creation - small class|275,824|138350|
|Adding property after the class creation - small class|271,349|138615|
|Adding property in the class creation - small class|272,152|137357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:21:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3867338,"opsSec":7730512.021543692},{"name":"Adding property in the object creation - small object","samples":3912180,"opsSec":7822166.961626304},{"name":"Adding property after the function creation - small class","samples":132753,"opsSec":265480.1709032125},{"name":"Adding property in the function creation - small class","samples":138350,"opsSec":275824.1458008309},{"name":"Adding property after the class creation - small class","samples":138615,"opsSec":271349.9119884885},{"name":"Adding property in the class creation - small class","samples":137357,"opsSec":272152.3038450288}]}-->
