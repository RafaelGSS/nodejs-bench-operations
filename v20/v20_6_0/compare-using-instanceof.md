## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|231,486|52|
|[True conditional] Using constructor name|179,888|94|
|[True conditional] Check if property is valid then instanceof |181,847|98|
|[False conditional] Using instanceof only|855,309,809|98|
|[False conditional] Using constructor name|855,297,195|97|
|[False conditional] Check if property is valid then instanceof |855,853,707|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:41:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":231485.78453562036,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":179888.0491143693,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":181846.87452778968,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":855309808.6763289,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":855297194.911394,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":855853707.3279694,"samples":6}]}-->
