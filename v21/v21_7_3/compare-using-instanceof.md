## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|271,391|54|
|[True conditional] Using constructor name|226,751|96|
|[True conditional] Check if property is valid then instanceof |229,988|96|
|[False conditional] Using instanceof only|911,782,711|99|
|[False conditional] Using constructor name|913,514,734|95|
|[False conditional] Check if property is valid then instanceof |912,785,640|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:05:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":271391.46327653615,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":226751.42220827684,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":229987.70785463302,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":911782711.1473707,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":913514734.125303,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":912785640.2397583,"samples":7}]}-->
