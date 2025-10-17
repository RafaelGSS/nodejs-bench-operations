## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,650,008|3825470|
|Adding property in the object creation - small object|7,664,874|3838173|
|Adding property after the function creation - small class|283,723|144119|
|Adding property in the function creation - small class|297,372|148919|
|Adding property after the class creation - small class|286,110|143082|
|Adding property in the class creation - small class|272,717|136359|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:45:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3825470,"opsSec":7650008.993905442},{"name":"Adding property in the object creation - small object","samples":3838173,"opsSec":7664874.488235175},{"name":"Adding property after the function creation - small class","samples":144119,"opsSec":283723.50228382566},{"name":"Adding property in the function creation - small class","samples":148919,"opsSec":297372.00142094126},{"name":"Adding property after the class creation - small class","samples":143082,"opsSec":286110.0951414148},{"name":"Adding property in the class creation - small class","samples":136359,"opsSec":272717.12185086764}]}-->
