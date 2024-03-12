## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,453|52|
|[True conditional] Using constructor name|202,278|92|
|[True conditional] Check if property is valid then instanceof |206,759|97|
|[False conditional] Using instanceof only|820,157,095|96|
|[False conditional] Using constructor name|819,483,616|96|
|[False conditional] Check if property is valid then instanceof |821,460,422|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246452.53425110647,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":202277.96566640763,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":206759.3885698573,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":820157095.4423698,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":819483615.9163088,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":821460421.8007162,"samples":6}]}-->
