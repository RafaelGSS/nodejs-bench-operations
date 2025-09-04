## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,709,110|3855781|
|Adding property in the object creation - small object|7,714,431|3857219|
|Adding property after the function creation - small class|278,046|141643|
|Adding property in the function creation - small class|294,920|147601|
|Adding property after the class creation - small class|285,323|142663|
|Adding property in the class creation - small class|271,110|142429|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:44:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3855781,"opsSec":7709110.225420349},{"name":"Adding property in the object creation - small object","samples":3857219,"opsSec":7714431.735881431},{"name":"Adding property after the function creation - small class","samples":141643,"opsSec":278046.822666423},{"name":"Adding property in the function creation - small class","samples":147601,"opsSec":294920.5467051396},{"name":"Adding property after the class creation - small class","samples":142663,"opsSec":285323.7801809902},{"name":"Adding property in the class creation - small class","samples":142429,"opsSec":271110.25748226023}]}-->
