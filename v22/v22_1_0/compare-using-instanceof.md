## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|337,877|168939|
|[True conditional] Using constructor name|332,259|166130|
|[True conditional] Check if property is valid then instanceof |335,971|167986|
|[False conditional] Using instanceof only|16,008,386|8004194|
|[False conditional] Using constructor name|16,092,390|8046196|
|[False conditional] Check if property is valid then instanceof |16,157,423|8078712|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:27:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":337877.49656249245,"samples":168939},{"name":"[True conditional] Using constructor name","opsSec":332259.6777080745,"samples":166130},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":335971.6882182136,"samples":167986},{"name":"[False conditional] Using instanceof only","opsSec":16008386.559212938,"samples":8004194},{"name":"[False conditional] Using constructor name","opsSec":16092390.358519835,"samples":8046196},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16157423.773751495,"samples":8078712}]}-->
