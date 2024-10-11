## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|455,437|227798|
|[True conditional] Using constructor name|355,630|177821|
|[True conditional] Check if property is valid then instanceof |351,430|175718|
|[False conditional] Using instanceof only|98,142,481|49090957|
|[False conditional] Using constructor name|97,710,088|48856739|
|[False conditional] Check if property is valid then instanceof |98,609,763|49309735|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:49:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":455437.60335592885,"samples":227798},{"name":"[True conditional] Using constructor name","opsSec":355630.65182590025,"samples":177821},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":351430.3475942893,"samples":175718},{"name":"[False conditional] Using instanceof only","opsSec":98142481.33242545,"samples":49090957},{"name":"[False conditional] Using constructor name","opsSec":97710088.24161872,"samples":48856739},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":98609763.64374502,"samples":49309735}]}-->
