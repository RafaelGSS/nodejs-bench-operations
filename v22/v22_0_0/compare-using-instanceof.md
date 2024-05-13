## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|328,010|164006|
|[True conditional] Using constructor name|335,440|167721|
|[True conditional] Check if property is valid then instanceof |340,727|170364|
|[False conditional] Using instanceof only|16,087,233|8043617|
|[False conditional] Using constructor name|16,097,455|8048728|
|[False conditional] Check if property is valid then instanceof |16,186,887|8093444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:51:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":328010.47343925666,"samples":164006},{"name":"[True conditional] Using constructor name","opsSec":335440.0665235107,"samples":167721},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":340727.8487167917,"samples":170364},{"name":"[False conditional] Using instanceof only","opsSec":16087233.163440414,"samples":8043617},{"name":"[False conditional] Using constructor name","opsSec":16097455.452662962,"samples":8048728},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16186887.9028204,"samples":8093444}]}-->
