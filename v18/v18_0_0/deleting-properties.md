## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,320,602|1660793|
|Using delete property (proto: null)|17,046,939|8523995|
|Using delete property (cached proto: null)|3,291,433|1645721|
|Using undefined assignment|76,332,652|38170698|
|Using undefined assignment (proto: null)|18,673,480|9336966|
|Using undefined property (cached proto: null)|81,430,300|40717657|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:41:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1660793,"opsSec":3320602.357887137},{"name":"Using delete property (proto: null)","samples":8523995,"opsSec":17046939.09029896},{"name":"Using delete property (cached proto: null)","samples":1645721,"opsSec":3291433.2513704174},{"name":"Using undefined assignment","samples":38170698,"opsSec":76332652.39999819},{"name":"Using undefined assignment (proto: null)","samples":9336966,"opsSec":18673480.549934227},{"name":"Using undefined property (cached proto: null)","samples":40717657,"opsSec":81430300.9878106}]}-->
