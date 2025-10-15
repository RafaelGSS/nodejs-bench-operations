## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,172,711|2086769|
|Using delete property (proto: null)|16,840,126|8420066|
|Using delete property (cached proto: null)|4,111,739|2055871|
|Using undefined assignment|79,605,898|39802958|
|Using undefined assignment (proto: null)|18,951,199|9476780|
|Using undefined property (cached proto: null)|78,680,421|39347303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:32:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2086769,"opsSec":4172711.6445313403},{"name":"Using delete property (proto: null)","samples":8420066,"opsSec":16840126.476438515},{"name":"Using delete property (cached proto: null)","samples":2055871,"opsSec":4111739.376710278},{"name":"Using undefined assignment","samples":39802958,"opsSec":79605898.6459141},{"name":"Using undefined assignment (proto: null)","samples":9476780,"opsSec":18951199.40070025},{"name":"Using undefined property (cached proto: null)","samples":39347303,"opsSec":78680421.80827808}]}-->
