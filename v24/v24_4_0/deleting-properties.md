## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,093,705|2046854|
|Using delete property (proto: null)|17,036,330|8518169|
|Using delete property (cached proto: null)|4,215,323|2107664|
|Using undefined assignment|77,711,320|38857642|
|Using undefined assignment (proto: null)|20,000,835|10000421|
|Using undefined property (cached proto: null)|76,871,237|38441839|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:24:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2046854,"opsSec":4093705.8303359095},{"name":"Using delete property (proto: null)","samples":8518169,"opsSec":17036330.333651353},{"name":"Using delete property (cached proto: null)","samples":2107664,"opsSec":4215323.8099681325},{"name":"Using undefined assignment","samples":38857642,"opsSec":77711320.72264314},{"name":"Using undefined assignment (proto: null)","samples":10000421,"opsSec":20000835.679735925},{"name":"Using undefined property (cached proto: null)","samples":38441839,"opsSec":76871237.77384858}]}-->
