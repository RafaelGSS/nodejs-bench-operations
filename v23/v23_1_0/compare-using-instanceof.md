## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|444,653|222336|
|[True conditional] Using constructor name|352,333|176167|
|[True conditional] Check if property is valid then instanceof |354,334|177168|
|[False conditional] Using instanceof only|92,512,457|46680802|
|[False conditional] Using constructor name|93,535,788|46767919|
|[False conditional] Check if property is valid then instanceof |93,646,641|46823333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:12:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":444653.4268263615,"samples":222336},{"name":"[True conditional] Using constructor name","opsSec":352333.7146096912,"samples":176167},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":354334.33746328857,"samples":177168},{"name":"[False conditional] Using instanceof only","opsSec":92512457.50101157,"samples":46680802},{"name":"[False conditional] Using constructor name","opsSec":93535788.98724656,"samples":46767919},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":93646641.2772867,"samples":46823333}]}-->
