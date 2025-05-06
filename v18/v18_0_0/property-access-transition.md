## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,612,446|1806285|
|Adding property in the object creation - small object|3,723,043|1861679|
|Adding property after the function creation - small class|228,625|114322|
|Adding property in the function creation - small class|223,626|114274|
|Adding property after the class creation - small class|197,109|99870|
|Adding property in the class creation - small class|196,606|99427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:20:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1806285,"opsSec":3612446.4760052},{"name":"Adding property in the object creation - small object","samples":1861679,"opsSec":3723043.0901232646},{"name":"Adding property after the function creation - small class","samples":114322,"opsSec":228625.87591231294},{"name":"Adding property in the function creation - small class","samples":114274,"opsSec":223626.18272035627},{"name":"Adding property after the class creation - small class","samples":99870,"opsSec":197109.74314585357},{"name":"Adding property in the class creation - small class","samples":99427,"opsSec":196606.33659175673}]}-->
