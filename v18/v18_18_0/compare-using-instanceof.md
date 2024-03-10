## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|262,830|54|
|[True conditional] Using constructor name|206,317|96|
|[True conditional] Check if property is valid then instanceof |207,633|96|
|[False conditional] Using instanceof only|822,580,049|95|
|[False conditional] Using constructor name|823,275,925|98|
|[False conditional] Check if property is valid then instanceof |823,821,314|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":262829.6883294658,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":206317.01602750804,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":207632.72572218283,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":822580048.687091,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":823275924.9240704,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":823821314.1833465,"samples":7}]}-->
