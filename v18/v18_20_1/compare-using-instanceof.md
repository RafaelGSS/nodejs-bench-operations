## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|293,154|146578|
|[True conditional] Using constructor name|306,668|153335|
|[True conditional] Check if property is valid then instanceof |306,934|153468|
|[False conditional] Using instanceof only|13,229,753|6614877|
|[False conditional] Using constructor name|16,814,169|8407085|
|[False conditional] Check if property is valid then instanceof |16,534,930|8267466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:45:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":293154.1392980822,"samples":146578},{"name":"[True conditional] Using constructor name","opsSec":306668.9687778626,"samples":153335},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":306934.3935776215,"samples":153468},{"name":"[False conditional] Using instanceof only","opsSec":13229753.489016518,"samples":6614877},{"name":"[False conditional] Using constructor name","opsSec":16814169.206255555,"samples":8407085},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16534930.770022774,"samples":8267466}]}-->
