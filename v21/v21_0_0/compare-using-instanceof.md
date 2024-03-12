## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|250,656|56|
|[True conditional] Using constructor name|206,968|96|
|[True conditional] Check if property is valid then instanceof |203,417|92|
|[False conditional] Using instanceof only|820,041,882|97|
|[False conditional] Using constructor name|820,102,586|92|
|[False conditional] Check if property is valid then instanceof |821,607,113|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":250656.38330313435,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":206967.70551866438,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":203417.00412694016,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":820041882.4170234,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":820102586.1353441,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":821607113.440325,"samples":6}]}-->
