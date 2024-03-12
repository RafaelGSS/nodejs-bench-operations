## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|261,434|54|
|[True conditional] Using constructor name|202,328|90|
|[True conditional] Check if property is valid then instanceof |208,214|96|
|[False conditional] Using instanceof only|821,556,677|97|
|[False conditional] Using constructor name|821,208,484|92|
|[False conditional] Check if property is valid then instanceof |821,341,632|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":261434.32217343958,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":202327.8366984411,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":208213.57467990994,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":821556676.6196833,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":821208484.383456,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":821341631.9251183,"samples":6}]}-->
