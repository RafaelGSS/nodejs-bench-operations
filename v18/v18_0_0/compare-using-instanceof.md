## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|313,114|156558|
|[True conditional] Using constructor name|303,469|151735|
|[True conditional] Check if property is valid then instanceof |317,149|158575|
|[False conditional] Using instanceof only|15,105,598|7552800|
|[False conditional] Using constructor name|21,070,167|10535084|
|[False conditional] Check if property is valid then instanceof |20,985,937|10492969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:46:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":313114.5502518258,"samples":156558},{"name":"[True conditional] Using constructor name","opsSec":303469.8448754913,"samples":151735},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":317149.2878646867,"samples":158575},{"name":"[False conditional] Using instanceof only","opsSec":15105598.883548819,"samples":7552800},{"name":"[False conditional] Using constructor name","opsSec":21070167.02543726,"samples":10535084},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":20985937.9599725,"samples":10492969}]}-->
