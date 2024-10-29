## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|967,173|484497|
|Using brackets {}|995,158|497580|
|Using '' + |982,123|491148|
|Using date.toString()|1,115,203|557668|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:31:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":967173.0336930077,"samples":484497},{"name":"Using brackets {}","opsSec":995158.1947830346,"samples":497580},{"name":"Using '' + ","opsSec":982123.7688831461,"samples":491148},{"name":"Using date.toString()","opsSec":1115203.7145353816,"samples":557668}]}-->
